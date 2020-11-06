import React from 'react';
import { Tweet } from 'domains/twitter';
import { Link } from 'react-router-dom';
import TweetCard from 'components/organisms/TweetCard';
import styles from './TweetList.module.scss';

type Props = {
  tweets: Tweet[];
};

const TweetList: React.FC<Props> = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet) => (
        <Link className={styles.linkStyle} to={`/tweets/${tweet.id}`}>
          <TweetCard key={tweet.id} tweet={tweet} />
        </Link>
      ))}
    </>
  );
};

export default TweetList;
