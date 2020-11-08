import { ListItem } from 'utils/listItem';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export const menuItems: ListItem[] = [
  {
    to: '/',
    icon: faHome,
    title: 'Home',
  },
  {
    to: '/tweets',
    icon: faSearch,
    title: 'Search',
  },
];
