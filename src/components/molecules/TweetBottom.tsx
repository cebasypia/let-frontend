import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from 'domains/twitter';
import FavoriteCounter from 'components/atoms/FavoriteCounter';
import color from '../scss/color.module.scss';
import styles from './TweetBottom.module.scss';

type Props = {
  tweet: Tweet;
};
const TweetBottom: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <a href={tweet.uri}>
      <FontAwesomeIcon className={color.sub} icon={faTwitter} />
    </a>
    <FavoriteCounter count={tweet.favoriteCount} />
    <span className={color.subText}>
      <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
      {tweet.retweetCount}
    </span>
  </div>
);

export default TweetBottom;
