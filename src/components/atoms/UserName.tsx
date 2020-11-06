import React from 'react';
import { combineStrings } from 'utils/combineStrings';
import styles from './UserName.module.scss';

type Props = {
  name: string;
  className?: string;
};

const UserName: React.FC<Props> = ({ name, className = '' }) => (
  <span className={combineStrings(styles.name, className)}>{name}</span>
);

export default UserName;
