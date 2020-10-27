import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { Tweet } from 'domains/twitter';
import styles from './TweetHeader.module.css';

type Props = {
  tweet: Tweet;
};

const TweetHeader: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <Avatar
      className={styles.avatar}
      alt="user image"
      src={tweet.user.profileImageUrl}
    />
    <div className={styles.content}>
      <Typography className={styles.createdAt} component="span">
        {tweet.createdAt}
      </Typography>
      <Typography className={styles.name} component="span">
        {tweet.user.name}
      </Typography>
    </div>
  </div>
);

export default TweetHeader;
