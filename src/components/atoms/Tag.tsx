import React from 'react';
import classnames from 'classnames';
import styles from './Tag.module.scss';

type Props = {
  title: string;
  className?: string;
};

const Tag: React.FC<Props> = ({ title, className = '' }) => (
  <div className={classnames(styles.wrapper, className)}>{title}</div>
);

export default Tag;
