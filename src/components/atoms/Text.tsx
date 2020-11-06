import React from 'react';
import styles from './Text.module.scss';

type Props = {
  text: string;
};

const Text: React.FC<Props> = ({ text }) => (
  <p className={styles.wrapper}>{text}</p>
);

export default Text;
