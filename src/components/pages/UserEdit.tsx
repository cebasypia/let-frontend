import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetUser } from 'hooks/useGetUser';
import UserForm from 'components/organisms/UserForm';

const UserEdit: React.FC = () => {
  const { user } = useAuth0();
  const loginUser = useGetUser(user.sub).user;

  return <>{loginUser && <UserForm loginUser={loginUser} />}</>;
};

export default UserEdit;
