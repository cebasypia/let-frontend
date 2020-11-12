import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import icon from 'components/scss/icon.module.scss';

type Props = {
  className?: string;
};

const BackButton: React.FC<Props> = ({ className = '' }) => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <FontAwesomeIcon
      color="white"
      onClick={handleClick}
      className={classnames(icon.button, className)}
      icon={faArrowLeft}
      size="lg"
    />
  );
};

export default BackButton;
