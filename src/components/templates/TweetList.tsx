import React from 'react';
import { Tweet } from 'domains/twitter';
import { Link, useLocation } from 'react-router-dom';
import TweetCard from 'components/organisms/TweetCard';
import { addTrailingSlash } from 'utils/addTrailingSlash';
import styles from './TweetList.module.scss';

type Props = {
  tweets: Tweet[];
};

const TweetList: React.FC<Props> = ({ tweets }) => {
  const location = useLocation();

  return (
    <>
      {tweets.map((tweet) => (
        <Link
          className={styles.linkStyle}
          to={addTrailingSlash(location.pathname) + tweet.id}
        >
          <TweetCard key={tweet.id} tweet={tweet} />
        </Link>
      ))}
    </>
  );
};

export default TweetList;
