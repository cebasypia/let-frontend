import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import color from 'components/scss/color.module.scss';
import styles from 'components/scss/icon.module.scss';

type Props = {
  count: number;
};

const FavoriteCounter: React.FC<Props> = ({ count }) => (
  <span className={color.subText}>
    <FontAwesomeIcon className={styles.mr} icon={faRetweet} />
    {count}
  </span>
);

export default FavoriteCounter;
