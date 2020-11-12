import React from 'react';
import { User } from 'domains/twitter';
import Banner from 'components/molecules/Banner';
import Avatar from 'components/atoms/Avatar';
import TweetLink from 'components/atoms/TweetLink';
import UserName from 'components/atoms/UserName';
import UserBottom from 'components/molecules/UserBottom';
import Text from 'components/atoms/Text';
import styles from './UserCard.module.scss';

type Props = {
  user: User;
};
const TwitterUserCard: React.FC<Props> = ({ user }) => (
  <>
    <Banner url={user.profileBannerUrl} />
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Avatar
          className={styles.avatar}
          src={user.profileImageUrl}
          size="large"
          color="sub"
        />
        <TweetLink uri={user.uri} />
      </div>
      <div className={styles.contents}>
        <UserName className={styles.userName} name={user.name} />
        <Text text={user.description} />
      </div>
      <UserBottom user={user} />
    </div>
  </>
);

export default TwitterUserCard;
