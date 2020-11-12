import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUser } from 'hooks/useGetUser';
import UserCard from 'components/organisms/UserCard';

type Params = {
  id: string;
};

const User: React.FC = () => {
  const { id } = useParams<Params>();
  const { user, isLoading } = useGetUser(id);

  return (
    <>
      {user ? (
        <>
          <UserCard user={user} />
        </>
      ) : (
        !isLoading && <div>User not found</div>
      )}
    </>
  );
};

export default User;
