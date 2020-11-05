import React from 'react';
import styles from './SearchHint.module.scss';

const TweetIndex: React.FC = () => {
  return (
    <div className={styles.hint}>
      好きな単語を入力して
      <br />
      世界のTweetを覗いてみよう！
    </div>
  );
};

export default TweetIndex;
