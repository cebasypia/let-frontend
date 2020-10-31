import React from 'react';
import styles from './UserName.module.scss';

type Props = {
  name: string;
};

const UserName: React.FC<Props> = ({ name }) => (
  <span className={styles.name}>{name}</span>
);

export default UserName;
