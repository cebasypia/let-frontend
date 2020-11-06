import React from 'react';
import TweetHeader from 'components/molecules/TweetHeader';
import TweetBottom from 'components/molecules/TweetBottom';
import Avatar from 'components/atoms/Avatar';

import { Tweet } from 'domains/twitter';
import styles from './TweetCard.module.scss';

type Props = {
  tweet: Tweet;
};
const TweetCard: React.FC<Props> = ({ tweet }) => (
  <div className={styles.wrapper}>
    <Avatar
      className={styles.avatar}
      src={tweet.user.profileImageUrl}
      uri={`/tweets/users/${tweet.user.screenName}`}
    />
    <div className={styles.contents}>
      <TweetHeader tweet={tweet} />
      <p className={styles.text}>{tweet.text}</p>
      <TweetBottom tweet={tweet} />
    </div>
  </div>
);

export default TweetCard;
