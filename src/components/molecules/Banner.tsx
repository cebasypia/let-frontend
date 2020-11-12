import React from 'react';
import classnames from 'classnames';
import styles from './Banner.module.scss';

type Props = {
  url?: string;
  color?: 'main' | 'sub';
};

const Banner: React.FC<Props> = ({ url, color = 'main' }) => {
  return (
    <div className={classnames(styles.wrapper, styles[color])}>
      {url && <img className={styles.banner} src={url} alt="user banner" />}
    </div>
  );
};

export default Banner;
