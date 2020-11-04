import React from 'react';
import { useParams } from 'react-router-dom';
import TweetCard from 'components/organisms/TweetCard';
import { useGetTweetById } from 'hooks/useGetTweetById';

type TweetId = {
  id: string;
};

const TweetDetail: React.FC = () => {
  const { id } = useParams<TweetId>();
  const { tweet, isLoading } = useGetTweetById(id);

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
