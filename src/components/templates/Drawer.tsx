import React, { useEffect } from 'react';
import Button from 'components/atoms/Button';
import { useLocation } from 'react-router-dom';
import styles from './Drawer.module.scss';

type Props = {
  isVisible: boolean;
  hideDrawer: () => void;
};

const Drawer: React.FC<Props> = ({ isVisible, hideDrawer, children }) => {
  const location = useLocation();

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isVisible]);

  useEffect(() => {
    document.body.style.overflow = 'initial';
    hideDrawer();
  }, [location, hideDrawer]);

  if (!isVisible) return null;

  return (
    <Button className={styles.bg} onClick={hideDrawer}>
      {children}
    </Button>
  );
};

export default Drawer;
