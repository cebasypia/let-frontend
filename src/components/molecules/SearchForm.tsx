import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';
import styles from './SearchForm.module.scss';

type FormData = {
  searchWord: string;
};

const SearchForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ searchWord }) => {
    /* eslint-disable-next-line */
    console.log(searchWord);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <FontAwesomeIcon className={icon.mr} icon={faSearch} />
        <input
          className={styles.input}
          name="searchWord"
          type="search"
          ref={register({ required: true })}
        />
      </div>
    </form>
  );
};

export default SearchForm;
