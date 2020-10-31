import React from 'react';
import useGetTweets from 'hooks/use-get-tweets';
import SearchForm from 'components/molecules/SearchForm';
import TweetCard from 'components/organisms/TweetCard';

const TweetList: React.FC = () => {
  const { tweets } = useGetTweets();

  return (
    <div>
      <SearchForm />
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
