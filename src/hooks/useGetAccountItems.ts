import { ListItem } from 'utils/listItem';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetLinkTo } from 'hooks/useGetLinkTo';
import { faUserPlus, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export const useGetAccountItems = (): ListItem[] => {
  const { isAuthenticated, user } = useAuth0();
  const { linkTo } = useGetLinkTo();

  return [
    {
      icon: faUserPlus,
      title: 'Sign up',
      isHidden: isAuthenticated,
      onClick: () => linkTo('/signUp'),
    },
    {
      icon: faUser,
      title: 'Profile',
      isHidden: !isAuthenticated,
      onClick: () => linkTo(`/users/${user.sub}`),
    },
    {
      icon: faCog,
      title: 'Edit',
      isHidden: !isAuthenticated,
      onClick: () => linkTo('/users/edit'),
    },
  ];
};
