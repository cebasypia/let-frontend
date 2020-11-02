import React, { useState } from 'react';
import useGetTweets from 'hooks/use-get-tweets';
import SearchForm from 'components/molecules/SearchForm';
import TweetCard from 'components/organisms/TweetCard';

const TweetList: React.FC = () => {
  const [word, setWord] = useState('test');
  const { tweets, isLoading } = useGetTweets(word);

  return (
    <div>
      <SearchForm word={word} handleWord={setWord} isLoading={isLoading} />
      {!isLoading && !tweets.length && <div>Tweet not found</div>}
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
