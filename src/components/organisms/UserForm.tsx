import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { patchUser, User } from 'domains/let';
import { getResizedImage } from 'utils/getResizedImage';
import Avatar from 'components/atoms/Avatar';
import Button from 'components/atoms/Button';
import TextForm from 'components/molecules/TextForm';
import styles from './UserForm.module.scss';

type FormData = {
  name: string;
  description: string;
};

type Props = {
  loginUser: User;
};

const UserForm: React.FC<Props> = ({ loginUser }) => {
  const { register, handleSubmit, errors, watch } = useForm<FormData>();
  const watchName = watch('name');
  const watchDescription = watch('description');
  const [profileImage, setProfileImage] = useState<string>(
    loginUser.profileImageUrl,
  );

  const { user, getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const onSubmit = handleSubmit(async ({ name, description }) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      const _ = await patchUser(
        { user: { name, description, file: profileImage } },
        accessToken,
      );
      history.push(`/users/${loginUser.id}`);
    } catch (err) {
      throw new Error(err);
    }
  });

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const image = await getResizedImage(files[0]);
    if (typeof image === 'string') {
      setProfileImage(image);
    }
  };

  const setAuth0Avatar = () => {
    setProfileImage(user.picture);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <div className={styles.fileBox}>
          <label className={styles.label} htmlFor="imageFile">
            <Avatar src={profileImage} color="main" size="large" />
            <FontAwesomeIcon
              size="lg"
              icon={faCamera}
              className={styles.icon}
            />
            <input
              className={styles.file}
              type="file"
              name="imageFile"
              id="imageFile"
              accept="image/*"
              onChange={handleOnChange}
            />
          </label>
        </div>
        {profileImage !== user.picture && (
          <Button onClick={setAuth0Avatar} className={styles.auth0Avatar}>
            <p className={styles.hint}>Auth0の画像を利用</p>
            <Avatar size="small" src={user.picture} />
          </Button>
        )}
        <TextForm name="name" value={watchName} hint={errors.name?.message}>
          <input
            className={styles.input}
            name="name"
            type="text"
            defaultValue={loginUser.name}
            ref={register({ required: '名前を入力してください' })}
          />
        </TextForm>
        <TextForm
          name="description"
          value={watchDescription}
          hint={errors.description?.message}
        >
          <input
            className={styles.input}
            name="description"
            type="text"
            defaultValue={loginUser.description}
            ref={register()}
          />
        </TextForm>
        <button type="submit" className={styles.submit}>
          更新
        </button>
      </form>
    </div>
  );
};

export default UserForm;
