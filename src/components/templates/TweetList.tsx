import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useGetTweets from 'hooks/use-get-tweets';
import SearchForm from 'components/molecules/SearchForm';
import TweetCard from 'components/organisms/TweetCard';
import styles from './TweetList.module.scss';

const TweetList: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') ?? '';
  const { tweets, isLoading } = useGetTweets(keyword);

  return (
    <div>
      <div className={styles.searchFormWrapper}>
        <SearchForm defaultWord={keyword} isLoading={isLoading} />
      </div>
      {!isLoading && !tweets.length && <div>Tweet not found</div>}
      {tweets.map((tweet) => (
        <Link className={styles.linkStyle} to={location.pathname + tweet.id}>
          <TweetCard key={tweet.id} tweet={tweet} />
        </Link>
      ))}
    </div>
  );
};

export default TweetList;
