import React from 'react';
import { User } from 'domains/twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';
import styles from './RetweetUser.module.scss';

type Props = {
  user: User;
};

const RetweetUser: React.FC<Props> = ({ user }) => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon className={icon.mr} icon={faRetweet} />
    <span> {user.name} Retweeted</span>
  </div>
);

export default RetweetUser;
