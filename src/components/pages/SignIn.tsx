import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      history.goBack();
    }
  }, [history, loginWithRedirect, isAuthenticated]);

  return <div>{!isAuthenticated && '...認証画面へリダイレクトします'}</div>;
};

export default SignIn;
