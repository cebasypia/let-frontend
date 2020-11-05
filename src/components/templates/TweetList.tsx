import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useGetTweets from 'hooks/use-get-tweets';
import SearchBox from 'components/organisms/SearchBox';
import TweetCard from 'components/organisms/TweetCard';
import EarthImage from 'images/earth.png';
import styles from './TweetList.module.scss';

const TweetList: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') ?? '';
  const { tweets, isLoading } = useGetTweets(keyword);

  return (
    <>
      <SearchBox defaultWord={keyword} isLoading={isLoading} />

      {keyword ? (
        //  検索ワードが入力されている時
        <>
          {!isLoading && !tweets.length && <div>Tweet not found</div>}
          {tweets.map((tweet) => (
            <Link
              className={styles.linkStyle}
              to={location.pathname + tweet.id}
            >
              <TweetCard key={tweet.id} tweet={tweet} />
            </Link>
          ))}
        </>
      ) : (
        // 検索ワードが入力されていない時
        <div className={styles.wrapper}>
          <div className={styles.hint}>
            好きな単語を入力して
            <br />
            世界のTweetを覗いてみよう！
          </div>

          <img className={styles.earth} src={EarthImage} alt="earth" />
        </div>
      )}
    </>
  );
};

export default TweetList;
