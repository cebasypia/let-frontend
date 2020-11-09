import { ListItem } from 'utils/listItem';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetListItem } from 'hooks/useGetListItem';
import { faUserPlus, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export const useGetAccountItems = (): ListItem[] => {
  const { isAuthenticated } = useAuth0();
  const { linkTo } = useGetListItem();

  return [
    {
      to: '/signUp',
      icon: faUserPlus,
      title: 'Sign up',
      isHidden: isAuthenticated,
      onClick: (path?: string) => linkTo(path),
    },
    {
      to: '/account',
      icon: faUser,
      title: 'Profile',
      isHidden: !isAuthenticated,
      onClick: (path?: string) => linkTo(path),
    },
    {
      to: '/account/edit',
      icon: faCog,
      title: 'Edit',
      isHidden: !isAuthenticated,
      onClick: (path?: string) => linkTo(path),
    },
  ];
};
