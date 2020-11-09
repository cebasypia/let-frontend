import { ListItem } from 'utils/listItem';
import { useAuth0 } from '@auth0/auth0-react';
import { faUserPlus, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export const useGetAccountItems = (): ListItem[] => {
  const { isAuthenticated } = useAuth0();

  return [
    {
      to: '/signUp',
      icon: faUserPlus,
      title: 'Sign up',
      isHidden: isAuthenticated,
    },
    {
      to: '/account',
      icon: faUser,
      title: 'Profile',
      isHidden: !isAuthenticated,
    },
    {
      to: '/account/edit',
      icon: faCog,
      title: 'Edit',
      isHidden: !isAuthenticated,
    },
  ];
};
