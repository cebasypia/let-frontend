import React from 'react';
import styles from './ErrorMessage.module.scss';

type Props = {
  message?: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className={styles.error}>{message}</div>
);
export default ErrorMessage;
