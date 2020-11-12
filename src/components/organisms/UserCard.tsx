import React from 'react';
import { useParams } from 'react-router-dom';
import { User } from 'domains/let';
import Banner from 'components/molecules/Banner';
import Avatar from 'components/atoms/Avatar';
import UserName from 'components/atoms/UserName';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import { useGetLinkTo } from 'hooks/useGetLinkTo';
import styles from './UserCard.module.scss';

type Props = {
  user: User;
};

type Params = {
  id: string;
};

const UserCard: React.FC<Props> = ({ user }) => {
  const { id } = useParams<Params>();
  const { linkTo } = useGetLinkTo();

  return (
    <>
      <Banner />
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar
            className={styles.avatar}
            src={user.profileImageUrl}
            size="large"
            color="main"
          />
          {user.id === id && (
            <Button onClick={() => linkTo('/account/edit')}>EDIT</Button>
          )}
        </div>
        <div className={styles.contents}>
          <UserName className={styles.userName} name={user.name} />
          <Text text={user.description} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
