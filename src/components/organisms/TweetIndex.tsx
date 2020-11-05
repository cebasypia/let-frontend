import React from 'react';
import SearchHint from 'components/molecules/SearchHint';
import SpinningEarth from 'components/atoms/SpinningEarth';
import styles from './TweetIndex.module.scss';

const TweetIndex: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <SearchHint />

        <SpinningEarth />
      </div>
    </>
  );
};

export default TweetIndex;
