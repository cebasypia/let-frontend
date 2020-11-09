import { useHistory } from 'react-router-dom';

type ReturnValue = {
  linkTo: (path?: string) => void;
};

export const useGetListItem = (): ReturnValue => {
  const history = useHistory();
  const linkTo = (path?: string): void => {
    if (path) history.push(path);
  };

  return { linkTo };
};
