import React from 'react';
import TweetCard from 'components/organisms/TweetCard';
import useGetTweets from 'hooks/use-get-tweets';

const TweetList: React.FC = () => {
  const { tweets } = useGetTweets();

  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
