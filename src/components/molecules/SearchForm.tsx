import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';
import styles from './SearchForm.module.scss';

type FormData = {
  searchWord: string;
};

const SearchForm: React.FC = () => {
  const [test, setTest] = useState('');
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ searchWord }) => {
    /* eslint-disable-next-line */
    console.log(searchWord);
    setTest(searchWord);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <FontAwesomeIcon className={icon.mr} icon={faSearch} />
      <input
        className={styles.input}
        name="searchWord"
        type="search"
        ref={register({ required: true })}
      />
      {errors.searchWord && <div>This field is required</div>}
      <div>{test}</div>
    </form>
  );
};

export default SearchForm;
