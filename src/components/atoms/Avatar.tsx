import React from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import Button from 'components/atoms/Button';
import noImage from 'images/noImage.png';
import styles from './Avatar.module.scss';

type Props = {
  src?: string;
  size?: 'small' | 'normal' | 'large';
  color?: 'main' | 'sub' | 'none';
  uri?: string;
  className?: string;
};

const Avatar: React.FC<Props> = ({
  src = 'noImage',
  size = 'normal',
  color = 'none',
  uri,
  className = '',
}) => {
  const history = useHistory();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string,
  ) => {
    e.preventDefault();
    history.push(url);
  };

  return (
    <div className={classnames(styles.wrapper, styles[size], className)}>
      {uri ? (
        <Button onClick={(e) => handleClick(e, uri)}>
          <img
            className={classnames(styles.image, styles[color])}
            src={src}
            alt="avatar"
          />
        </Button>
      ) : (
        <img
          className={classnames(styles.image, styles[color])}
          src={src}
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
          alt="avatar"
        />
      )}
    </div>
  );
};

export default Avatar;
