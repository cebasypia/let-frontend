import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from 'domains/twitter';
import FavoriteCounter from 'components/atoms/FavoriteCounter';
import TweetLink from 'components/atoms/TweetLink';
import color from '../scss/color.module.scss';
import styles from './TweetBottom.module.scss';

type Props = {
  tweet: Tweet;
};
const TweetBottom: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <TweetLink uri={tweet.uri} />
    <FavoriteCounter count={tweet.favoriteCount} />
    <span className={color.subText}>
      <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
      {tweet.retweetCount}
    </span>
  </div>
);

export default TweetBottom;
