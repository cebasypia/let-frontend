import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type ListItem = {
  to?: string;
  icon: IconDefinition;
  title: string;
  isHidden?: boolean;
  onClick: (path?: string) => void;
};
