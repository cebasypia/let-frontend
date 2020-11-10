import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUser } from 'hooks/useGetUser';
// import LUserCard from 'components/organisms/LUserCard';
// import Tag from 'components/atoms/Tag';

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
          {/* <LUserCard user={user} /> */}
          {/* <Tag title="Notes" /> */}
          <div>{user.name}</div>
          <div>{user.sub}</div>
          <div>{user.introduction}</div>
        </>
      ) : (
        !isLoading && <div>User not found</div>
      )}
    </>
  );
};

export default User;
