import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetTweets from 'hooks/use-get-tweets';
import SearchForm from 'components/molecules/SearchForm';
import TweetCard from 'components/organisms/TweetCard';

const TweetList: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const word = searchParams.get('word') ?? '';
  const { tweets, isLoading } = useGetTweets(word);

  return (
    <div>
      <SearchForm defaultWord={word} isLoading={isLoading} />
      {!isLoading && !tweets.length && <div>Tweet not found</div>}
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
