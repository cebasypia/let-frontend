import React from 'react';
import styles from './FollowCount.module.scss';

type Props = {
  count: number;
  type: 'following' | 'followers';
  className?: string;
};

const FollowCount: React.FC<Props> = ({ count, type, className = '' }) => (
  <div className={className}>
    <b className={styles.count}>{count}</b>
    <span className={styles.type}> {type}</span>
  </div>
);

export default FollowCount;
