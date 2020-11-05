import React from 'react';
import EarthImage from 'images/earth.png';
import styles from './SpinningEarth.module.scss';

const SpinningEarth: React.FC = () => (
  <img className={styles.earth} src={EarthImage} alt="earth" />
);

export default SpinningEarth;
