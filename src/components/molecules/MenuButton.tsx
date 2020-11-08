import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Drawer from 'components/templates/Drawer';
import List from 'components/organisms/List';
import { menuItems } from 'utils/menuItems';
import { combineStrings } from 'utils/combineStrings';
import icon from 'components/scss/icon.module.scss';
import styles from './MenuButton.module.scss';

type Props = {
  className?: string;
};

const MenuButton: React.FC<Props> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const hideDrawer = useCallback(() => setIsVisible(false), []);

  return (
    <>
      <FontAwesomeIcon
        color="white"
        onClick={showDrawer}
        className={combineStrings(icon.button, className)}
        icon={faBars}
        size="lg"
      />
      <Drawer isVisible={isVisible} hideDrawer={hideDrawer}>
        <List className={styles.menuList} items={menuItems} />
      </Drawer>
    </>
  );
};
export default MenuButton;
