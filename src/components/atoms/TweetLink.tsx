import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import color from 'components/scss/color.module.scss';
import icon from 'components/scss/icon.module.scss';

type Props = {
  uri: string;
};

const TweetLink: React.FC<Props> = ({ uri }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault();
    window.open(uri, '_blank');
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      className={`${color.sub} ${icon.button}`}
      icon={faTwitter}
      size="lg"
    />
  );
};

export default TweetLink;
