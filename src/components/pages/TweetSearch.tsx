import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetTweets from 'hooks/use-get-tweets';
import SearchBox from 'components/organisms/SearchBox';
import TweetList from 'components/templates/TweetList';
import TweetIndex from 'components/organisms/TweetIndex';

const TweetSearch: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') ?? '';
  const { tweets, isLoading } = useGetTweets(keyword);

  return (
    <>
      <SearchBox defaultWord={keyword} isLoading={isLoading} />

      {keyword ? (
        <>
          <TweetList tweets={tweets} />
          {!isLoading && !tweets.length && <div>Tweet not found</div>}
        </>
      ) : (
        <TweetIndex />
      )}
    </>
  );
};

export default TweetSearch;
