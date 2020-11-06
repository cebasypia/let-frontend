import React from 'react';
import { User } from 'domains/twitter';
import FollowCount from 'components/atoms/FollowCount';
import styles from './UserBottom.module.scss';

type Props = {
  user: User;
};
const UserBottom: React.FC<Props> = ({ user }) => (
  <div className={styles.wrapper}>
    <FollowCount
      type="following"
      count={user.friendsCount}
      className={styles.following}
    />
    <FollowCount type="followers" count={user.followersCount} />
  </div>
);

export default UserBottom;
