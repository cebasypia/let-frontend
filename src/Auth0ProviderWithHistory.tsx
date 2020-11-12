import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { AppState } from '@auth0/auth0-react/dist/auth0-provider';

export const Auth0ProviderWithHistory: React.FC = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

  const history = useHistory();

  const onRedirectCallback = async (appState: AppState) => {
    history.replace({
      pathname: appState?.returnTo || window.location.pathname,
      search: '',
    });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
      <UserMonitor>{children}</UserMonitor>
    </Auth0Provider>
  );
};

const UserMonitor: React.FC = ({ children }) => {
  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    const RegisterUser = async () => {
      if (!user) return;
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });

      const url = new URL(`http://localhost:3000/api/v1/users/${user.sub}`);

      await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    };
    void RegisterUser();
  }, [user, getAccessTokenSilently]);

  return <>{children}</>;
};
