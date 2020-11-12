import React from 'react';
import Button from 'components/atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem } from 'utils/listItem';
import classnames from 'classnames';
import icon from 'components/scss/icon.module.scss';
import styles from './List.module.scss';

type Props = {
  className?: string;
  items: ListItem[];
};

const List: React.FC<Props> = ({ className = '', items }) => {
  return (
    <div className={classnames(styles.wrapper, className)}>
      {items
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Button
            key={item.title}
            onClick={item.onClick}
            className={styles.link}
          >
            <FontAwesomeIcon className={icon.mr} icon={item.icon} />
            {item.title}
          </Button>
        ))}
    </div>
  );
};

export default List;
