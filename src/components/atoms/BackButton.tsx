import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';

const Header: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <FontAwesomeIcon
      color="white"
      onClick={handleClick}
      className={icon.button}
      icon={faArrowLeft}
      size="lg"
    />
  );
};

export default Header;
