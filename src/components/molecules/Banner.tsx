import React from 'react';
import styles from './Banner.module.scss';

type Props = {
  url: string;
};

const Banner: React.FC<Props> = ({ url }) => {
  return (
    <div className={styles.wrapper}>
      {url && <img className={styles.banner} src={url} alt="user banner" />}
    </div>
  );
};

export default Banner;
