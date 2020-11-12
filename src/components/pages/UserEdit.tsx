import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { patchUser, getUser } from 'domains/let';
import ErrorMessage from 'components/atoms/ErrorMessage';
// import styles from './UserFrom.module.scss';

type FormData = {
  name: string;
};

const UserFrom: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormData>();
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
    <form onSubmit={onSubmit}>
      <div>
        <input
          // className={styles.input}
          name="name"
          type="text"
          ref={register({ required: '名前を入力してください' })}
        />
      </div>
      <div>
        <ErrorMessage message={errors.name?.message} />
      </div>
    </form>
  );
};

export default UserFrom;
