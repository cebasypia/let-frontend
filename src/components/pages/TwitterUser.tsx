import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTwitterUser } from 'hooks/useGetTwitterUser';
import { useGetTimeline } from 'hooks/useGetTimeline';
import UserCard from 'components/organisms/UserCard';
import TweetList from 'components/templates/TweetList';
import Tag from 'components/atoms/Tag';

type Params = {
  screenName: string;
};

const TwitterUser: React.FC = () => {
  const { screenName } = useParams<Params>();
  const { user, isLoading } = useGetTwitterUser(screenName);
  const { tweets } = useGetTimeline(screenName);

  return (
    <>
      {user ? (
        <>
          <UserCard user={user} />
          <Tag title="Tweets" />
          <TweetList tweets={tweets} />
        </>
      ) : (
        !isLoading && <div>User not found</div>
      )}
    </>
  );
};

export default TwitterUser;
