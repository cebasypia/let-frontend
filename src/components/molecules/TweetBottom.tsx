import React from 'react';
import { Tweet } from 'domains/twitter';
import TweetLink from 'components/atoms/TweetLink';
import FavoriteCounter from 'components/atoms/FavoriteCounter';
import RetweetCounter from 'components/atoms/RetweetCounter';
import styles from './TweetBottom.module.scss';

type Props = {
  tweet: Tweet;
};
const TweetBottom: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <TweetLink uri={tweet.uri} />
    <FavoriteCounter count={tweet.favoriteCount} />
    <RetweetCounter count={tweet.retweetCount} />
  </div>
);

export default TweetBottom;
