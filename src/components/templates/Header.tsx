import React from 'react';
import { combineStrings } from 'utils/combineStrings';
import HomeButton from 'components/atoms/HomeButton';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.blocker} />
      <header className={styles.wrapper}>
        <div className={combineStrings(styles.box, styles.start)}>
          <div>1</div>
        </div>
        <div className={combineStrings(styles.box, styles.center)}>
          <HomeButton />
        </div>
        <div className={combineStrings(styles.box, styles.end)}>
          <div>3</div>
        </div>
      </header>
    </>
  );
};

export default Header;
