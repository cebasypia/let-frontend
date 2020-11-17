import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import color from 'components/scss/color.module.scss';
import { numFormatter } from 'utils/numFormatter';
import styles from 'components/scss/icon.module.scss';

type Props = {
  count: number;
};

const FavoriteCounter: React.FC<Props> = ({ count }) => (
  <span className={color.subText}>
    <FontAwesomeIcon className={styles.mr} icon={faHeart} />
    {numFormatter(count)}
  </span>
);

export default FavoriteCounter;
