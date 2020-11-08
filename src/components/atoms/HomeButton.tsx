import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import letUrl from 'images/let.png';

import styles from './HomeButton.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.homeButton}>
      {location.pathname === '/' ? (
        <img className={styles.letImage} src={letUrl} alt="home button" />
      ) : (
        <Link to="/">
          <img className={styles.letImage} src={letUrl} alt="home button" />
        </Link>
      )}
    </div>
  );
};

export default Header;
