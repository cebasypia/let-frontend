import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTwitterUser } from 'hooks/useGetTwitterUser';

type Params = {
  screenName: string;
};

const TwitterUser: React.FC = () => {
  const { screenName } = useParams<Params>();
  const { user, isLoading } = useGetTwitterUser(screenName);

  return <>{isLoading ? <div>now Loading</div> : <div>{user?.name}</div>}</>;
};

export default TwitterUser;
