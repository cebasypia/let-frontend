import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

const Button: React.FC<Props> = ({
  className = '',
  onClick,
  onKeyDown,
  children,
}) => (
  <div
    className={classnames(styles.wrapper, className)}
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {children}
  </div>
);

export default Button;
