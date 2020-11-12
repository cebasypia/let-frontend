import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type ListItem = {
  icon: IconDefinition;
  title: string;
  isHidden?: boolean;
  onClick: () => void;
};
