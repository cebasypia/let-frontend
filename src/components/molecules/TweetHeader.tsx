import React from 'react';
import { Tweet } from 'domains/twitter';
import UserName from 'components/atoms/UserName';
import CreatedAt from 'components/atoms/CreatedAt';
import styles from './TweetHeader.module.css';

type Props = {
  tweet: Tweet;
};

const TweetHeader: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <UserName name={tweet.user.name} />
    <CreatedAt createdAt={tweet.createdAt} />
  </div>
);

export default TweetHeader;
