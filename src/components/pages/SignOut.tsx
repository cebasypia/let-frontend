import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignOut: React.FC = () => {
  const history = useHistory();
  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      history.goBack();
    }
  }, [history, logout, isAuthenticated]);

  return <div>{isAuthenticated && 'ログアウトします'}</div>;
};

export default SignOut;
