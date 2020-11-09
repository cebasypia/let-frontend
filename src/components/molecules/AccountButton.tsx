import React, { useState, useCallback } from 'react';
import Avatar from 'components/atoms/Avatar';
import Button from 'components/atoms/Button';
import Drawer from 'components/templates/Drawer';
import List from 'components/organisms/List';
import { useGetAccountItems } from 'hooks/useGetAccountItems';
import styles from './AccountButton.module.scss';

const AccountButton: React.FC = () => {
  const accountItems = useGetAccountItems();

  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const hideDrawer = useCallback(() => setIsVisible(false), []);

  return (
    <>
      <Button onClick={showDrawer}>
        <Avatar className={styles.margin} src="" size="small" />
      </Button>
      <Drawer isVisible={isVisible} hideDrawer={hideDrawer}>
        <List className={styles.accountList} items={accountItems} />
      </Drawer>
    </>
  );
};

export default AccountButton;
