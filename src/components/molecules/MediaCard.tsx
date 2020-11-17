import React from 'react';
import classnames from 'classnames';
import Button from 'components/atoms/Button';
import styles from './MediaCard.module.scss';

type Props = {
  mediaUrls: string[];
};

const MediaCard: React.FC<Props> = ({ mediaUrls }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string,
  ): void => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  if (mediaUrls.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div
        className={classnames(styles.wrapperChild, {
          [styles.d3]: mediaUrls.length === 3,
        })}
      >
        {mediaUrls.map((url, i) => (
          <Button
            onClick={(e) => handleClick(e, url)}
            className={classnames(
              styles[`d${mediaUrls.length}m${i + 1}`],
              styles.imgBox,
            )}
          >
            <div
              style={{ backgroundImage: `url(${url})` }}
              className={styles.divImg}
            >
              <img className={styles.img} src={url} alt="media" />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MediaCard;
