import { ListItem } from 'utils/listItem';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetLinkTo } from 'hooks/useGetLinkTo';

import {
  faHome,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const useGetMenuItems = (): ListItem[] => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { linkTo } = useGetLinkTo();

  return [
    {
      to: '/',
      icon: faHome,
      title: 'Home',
      onClick: (path?: string) => linkTo(path),
    },
    {
      to: '/tweets',
      icon: faSearch,
      title: 'Search',
      onClick: (path?: string) => linkTo(path),
    },
    {
      to: '/signIn',
      icon: faSignInAlt,
      title: 'Sign in',
      isHidden: isAuthenticated,
      onClick: () => loginWithRedirect(),
    },
    {
      to: '/signOut',
      icon: faSignOutAlt,
      title: 'Sign out',
      isHidden: !isAuthenticated,
      onClick: () => logout(),
    },
  ];
};
