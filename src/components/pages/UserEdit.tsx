import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import { patchUser } from 'domains/let';
import ErrorMessage from 'components/atoms/ErrorMessage';
// import styles from './UserFrom.module.scss';

type FormData = {
  name: string;
};

const UserFrom: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormData>();
  const { getAccessTokenSilently } = useAuth0();

  const onSubmit = handleSubmit(async ({ name }) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      const _ = await patchUser({ user: { name } }, accessToken);
      /* eslint-disable-next-line */
      console.log(_);
    } catch (err) {
      throw new Error(err);
    }
  });

  const { user } = useAuth0();

  useEffect(() => {
    setValue('name', user.name);
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
