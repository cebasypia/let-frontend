import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { patchUser, User } from 'domains/let';
import Avatar from 'components/atoms/Avatar';
import TextForm from 'components/molecules/TextForm';
import styles from './UserForm.module.scss';

type FormData = {
  name: string;
  description: string;
  profileImage: string;
};

type Props = {
  user: User;
};

const UserForm: React.FC<Props> = ({ user }) => {
  const { register, handleSubmit, errors, watch } = useForm<FormData>();
  const watchName = watch('name');
  const watchDescription = watch('description');
  const [imageUrl, setImageUrl] = useState(user.profileImageUrl);

  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const onSubmit = handleSubmit(async ({ name, description }) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      const _ = await patchUser({ user: { name, description } }, accessToken);
      history.push(`/users/${user.id}`);
    } catch (err) {
      throw new Error(err);
    }
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    setImageUrl(URL.createObjectURL(files[0]));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <div className={styles.fileRow}>
          <label className={styles.fileBox} htmlFor="profileImage">
            <Avatar src={imageUrl} color="main" size="large" />
            <input
              className={styles.file}
              type="file"
              name="profileImage"
              id="profileImage"
              accept="image/*"
              onChange={handleOnChange}
              ref={register()}
            />
          </label>
        </div>
        <TextForm name="name" value={watchName} hint={errors.name?.message}>
          <input
            className={styles.input}
            name="name"
            type="text"
            defaultValue={user.name}
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
            defaultValue={user.description}
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
