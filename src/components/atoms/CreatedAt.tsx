import React from 'react';
import moment from 'utils/moment';
import styles from './CreatedAt.module.css';

type Props = {
  createdAt: string;
};

const CreatedAt: React.FC<Props> = ({ createdAt }) => (
  <span className={styles.createdAt}>{moment(createdAt).fromNow()}</span>
);

export default CreatedAt;
