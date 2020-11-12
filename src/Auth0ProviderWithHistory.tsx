import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import ky from 'ky';
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
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const RegisterUser = async () => {
      if (!isAuthenticated) return;
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });

      const url = new URL(
        `${process.env.REACT_APP_BACKEND_DOMAIN}/users/register`,
      );

      const response = await ky(url.toString(), {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const _ = await response.json();

      /* eslint-disable-next-line */
      console.log(_)
    };
    void RegisterUser();
  }, [isAuthenticated, getAccessTokenSilently]);

  return <>{children}</>;
};
