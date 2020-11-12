import React from 'react';
import classnames from 'classnames';
import styles from './UserName.module.scss';

type Props = {
  name: string;
  className?: string;
};

const UserName: React.FC<Props> = ({ name, className = '' }) => (
  <span className={classnames(styles.name, className)}>{name}</span>
);

export default UserName;
