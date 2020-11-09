import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem } from 'utils/listItem';
import { combineStrings } from 'utils/combineStrings';
import icon from 'components/scss/icon.module.scss';
import styles from './List.module.scss';

type Props = {
  className?: string;
  items: ListItem[];
};

const List: React.FC<Props> = ({ className = '', items }) => {
  return (
    <div className={combineStrings(styles.wrapper, className)}>
      {items
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Link key={item.to} to={item.to} className={styles.link}>
            <FontAwesomeIcon className={icon.mr} icon={item.icon} />
            {item.title}
          </Link>
        ))}
    </div>
  );
};

export default List;
