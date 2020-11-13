import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { patchUser, getUser } from 'domains/let';
import TextForm from 'components/molecules/TextForm';
import styles from './UserForm.module.scss';

type FormData = {
  name: string;
  description: string;
};

const UserForm: React.FC = () => {
  const { register, handleSubmit, errors, setValue, watch } = useForm<
    FormData
  >();
  const watchName = watch('name');
  const watchDescription = watch('description');
  const { user, getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const onSubmit = handleSubmit(async ({ name }) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      const _ = await patchUser({ user: { name } }, accessToken);
      history.push(`/users/${user.sub}`);
    } catch (err) {
      throw new Error(err);
    }
  });

  useEffect(() => {
    const setForm = async () => {
      if (!user) return;
      const userData = await getUser(user.sub);
      setValue('name', userData.name);
    };
    setForm();
  }, [setValue, user]);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <TextForm name="name" value={watchName} hint={errors.name?.message}>
          <input
            className={styles.input}
            name="name"
            type="text"
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
            ref={register()}
          />
        </TextForm>
      </form>
    </div>
  );
};

export default UserForm;
