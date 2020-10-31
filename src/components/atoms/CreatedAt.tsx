import React from 'react';
import styles from './CreatedAt.module.css';

type Props = {
  createdAt: string;
};

const CreatedAt: React.FC<Props> = ({ createdAt }) => (
  <span className={styles.createdAt}>{createdAt}</span>
);

export default CreatedAt;
