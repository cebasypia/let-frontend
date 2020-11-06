import React from 'react';
import { combineStrings } from 'utils/combineStrings';
import styles from './Tag.module.scss';

type Props = {
  title: string;
  className?: string;
};

const Tag: React.FC<Props> = ({ title, className = '' }) => (
  <div className={combineStrings(styles.wrapper, className)}>{title}</div>
);

export default Tag;
