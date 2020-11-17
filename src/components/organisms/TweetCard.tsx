import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import RetweetUser from 'components/molecules/RetweetUser';
import TweetHeader from 'components/molecules/TweetHeader';
import TweetBottom from 'components/molecules/TweetBottom';
import Avatar from 'components/atoms/Avatar';
import MediaCard from 'components/molecules/MediaCard';
import { Tweet } from 'domains/twitter';
import classnames from 'classnames';
import styles from './TweetCard.module.scss';

type Props = {
  tweet: Tweet;
  className?: string;
};
const TweetCard: React.FC<Props> = ({ tweet, className = '' }) => {
  const history = useHistory();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (tweet.quote) {
      history.push(`/tweets/${tweet.quote.id}`);
    }
  };

  return (
    <>
      {tweet.retweetUser && <RetweetUser user={tweet.retweetUser} />}
      <div className={classnames(styles.wrapper, className)}>
        <Avatar
          className={styles.avatar}
          src={tweet.user.profileImageUrl}
          uri={`/tweets/users/${tweet.user.screenName}`}
        />
        <div className={styles.contents}>
          <TweetHeader tweet={tweet} />
          <p className={styles.text}>{tweet.text}</p>
          {tweet.quote && (
            <Button onClick={(e) => handleClick(e)}>
              <TweetCard tweet={tweet.quote} className={styles.quote} />
            </Button>
          )}
          <MediaCard mediaUrls={tweet.mediaUrls} />
          <TweetBottom tweet={tweet} />
        </div>
      </div>
    </>
  );
};

export default TweetCard;
