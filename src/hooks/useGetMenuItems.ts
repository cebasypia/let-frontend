import { ListItem } from 'utils/listItem';
import { useAuth0 } from '@auth0/auth0-react';

import {
  faHome,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const useGetMenuItems = (): ListItem[] => {
  const { isAuthenticated } = useAuth0();

  return [
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
    {
      to: '/signIn',
      icon: faSignInAlt,
      title: 'Sign in',
      isHidden: isAuthenticated,
    },
    {
      to: '/signOut',
      icon: faSignOutAlt,
      title: 'Sign out',
      isHidden: !isAuthenticated,
    },
  ];
};
