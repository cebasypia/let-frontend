import React from 'react';
import { Card, Avatar } from '@material-ui/core';
import { getTweets } from 'domains/twitter';
import * as styles from '../css/TweetCard.css';

const tweets = getTweets();
const TweetCard: React.FC = () => (
  <Card className={styles.test}>
    <Avatar alt="user image" src={tweets[0].user.profileImageUrl} />
  </Card>
);

export default TweetCard;
