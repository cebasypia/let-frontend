import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/atoms/Button';
import icon from 'components/scss/icon.module.scss';
import styles from './NextTweetsButton.module.scss';

type Props = {
  isLoading: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const NextTweetsButton: React.FC<Props> = ({ isLoading, onClick }) => {
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <FontAwesomeIcon className={icon.loading} size="lg" icon={faSpinner} />
      ) : (
        <Button onClick={onClick}>続きを表示</Button>
      )}
    </div>
  );
};

export default NextTweetsButton;
