import React from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import AccountButton from 'components/molecules/AccountButton';
import BackButton from 'components/atoms/BackButton';
import HomeButton from 'components/atoms/HomeButton';
import MenuButton from 'components/molecules/MenuButton';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className={styles.blocker} />
      <header className={styles.wrapper}>
        <div className={classnames(styles.headerContent, styles.start)}>
          {isHome ? (
            <AccountButton />
          ) : (
            <BackButton className={styles.margin} />
          )}
        </div>
        <div className={classnames(styles.headerContent, styles.center)}>
          <HomeButton />
        </div>
        <div className={classnames(styles.headerContent, styles.end)}>
          <MenuButton className={styles.margin} />
        </div>
      </header>
    </>
  );
};

export default Header;
