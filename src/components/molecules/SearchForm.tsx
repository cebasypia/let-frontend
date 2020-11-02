import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';
import styles from './SearchForm.module.scss';

type FormData = {
  searchWord: string;
};

type Props = {
  word: string;
  handleWord: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

const SearchForm: React.FC<Props> = ({ word, handleWord, isLoading }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ searchWord }) => {
    handleWord(searchWord);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        {isLoading ? (
          <FontAwesomeIcon
            className={`${icon.mr} ${icon.loading}`}
            icon={faSpinner}
          />
        ) : (
          <FontAwesomeIcon className={icon.mr} icon={faSearch} />
        )}
        <input
          className={styles.input}
          name="searchWord"
          type="search"
          defaultValue={word}
          ref={register({ required: true })}
        />
      </div>
    </form>
  );
};

export default SearchForm;
