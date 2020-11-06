import React from 'react';
import { Link } from 'react-router-dom';
import { combineStrings } from 'utils/combineStrings';
import styles from './Avatar.module.scss';

type Props = {
  src: string;
  size?: 'small' | 'normal' | 'large';
  color?: 'main' | 'sub' | '';
  uri?: string;
  className?: string;
};

const Avatar: React.FC<Props> = ({
  src,
  size = 'normal',
  color = '',
  uri,
  className = '',
}) => {
  return (
    <div className={combineStrings(styles.wrapper, styles[size], className)}>
      {uri ? (
        <Link to={uri}>
          <img
            className={combineStrings(styles.image, styles[color])}
            src={src}
            alt="avatar"
          />
        </Link>
      ) : (
        <img
          className={combineStrings(styles.image, styles[color])}
          src={src}
          alt="avatar"
        />
      )}
    </div>
  );
};

export default Avatar;
