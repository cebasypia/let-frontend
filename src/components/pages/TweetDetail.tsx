import React from 'react';
import { useParams } from 'react-router-dom';
import TweetCard from 'components/organisms/TweetCard';
import { useGetTweetById } from 'hooks/useGetTweetById';

type TweetId = {
  tweetId: string;
};

const TweetDetail: React.FC = () => {
  const { tweetId } = useParams<TweetId>();
  const { tweet, isLoading } = useGetTweetById(tweetId);

  return (
    <>
      {tweet ? (
        <TweetCard tweet={tweet} />
      ) : (
        <div>{!isLoading && 'お探しのTweetは見つかりませんでした'}</div>
      )}
    </>
  );
};

export default TweetDetail;
