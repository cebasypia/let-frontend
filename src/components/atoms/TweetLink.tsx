import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import color from 'components/scss/color.module.scss';

type Props = {
  uri: string;
};

const TweetLink: React.FC<Props> = ({ uri }) => (
  <a href={uri}>
    <FontAwesomeIcon className={color.sub} icon={faTwitter} />
  </a>
);

export default TweetLink;
