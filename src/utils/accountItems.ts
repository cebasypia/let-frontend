import { ListItem } from 'utils/listItem';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export const accountItems: ListItem[] = [
  {
    to: '/account',
    icon: faUser,
    title: 'Profile',
  },
  {
    to: '/account/edit',
    icon: faCog,
    title: 'Edit',
  },
];
