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
      icon: faHome,
      title: 'Home',
      onClick: () => linkTo('/'),
    },
    {
      icon: faSearch,
      title: 'Search',
      onClick: () => linkTo('/tweets'),
    },
    {
      icon: faSignInAlt,
      title: 'Sign in',
      isHidden: isAuthenticated,
      onClick: () => loginWithRedirect(),
    },
    {
      icon: faSignOutAlt,
      title: 'Sign out',
      isHidden: !isAuthenticated,
      onClick: () => logout(),
    },
  ];
};
