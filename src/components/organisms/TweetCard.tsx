import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import TweetHeader from 'components/molecules/TweetHeader';
import { Tweet } from 'domains/twitter';
import styles from '../css/TweetCard.module.css';

type Props = {
  tweet: Tweet;
};
const TweetCard: React.FC<Props> = ({ tweet }) => (
  <Card className={styles.wrapper}>
    <TweetHeader tweet={tweet} />
    <CardContent>
      <p>{tweet.text}</p>
    </CardContent>
  </Card>
);

export default TweetCard;
