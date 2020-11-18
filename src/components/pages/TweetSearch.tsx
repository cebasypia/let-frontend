import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetTweets from 'hooks/useGetTweets';
import NextTweetsButton from 'components/molecules/NextTweetsButton';
import SearchBox from 'components/organisms/SearchBox';
import TweetIndex from 'components/organisms/TweetIndex';
import TweetList from 'components/templates/TweetList';

const TweetSearch: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') ?? '';
  const { tweets, isLoading, getNextTweets } = useGetTweets(keyword);

  return (
    <>
      <SearchBox defaultWord={keyword} isLoading={isLoading} />

      {keyword ? (
        <>
          <TweetList tweets={tweets} />
          {!!tweets.length && (
            <NextTweetsButton
              isLoading={isLoading}
              onClick={() => getNextTweets(tweets[tweets.length - 1].id)}
            />
          )}
          {!tweets.length && !isLoading && <div>Tweet not found</div>}
        </>
      ) : (
        <TweetIndex />
      )}
    </>
  );
};

export default TweetSearch;
