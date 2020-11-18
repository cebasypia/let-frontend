import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTwitterUser } from 'hooks/useGetTwitterUser';
import TwitterUserCard from 'components/organisms/TwitterUserCard';
import Timeline from 'components/templates/Timeline';

type Params = {
  screenName: string;
};

const TwitterUser: React.FC = () => {
  const { screenName } = useParams<Params>();
  const { user, isLoading } = useGetTwitterUser(screenName);

  return (
    <>
      {user ? (
        <>
          <TwitterUserCard user={user} />
          <Timeline screenName={screenName} />
        </>
      ) : (
        !isLoading && <div>User not found</div>
      )}
    </>
  );
};

export default TwitterUser;
