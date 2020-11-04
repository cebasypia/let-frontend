import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import icon from 'components/scss/icon.module.scss';
import ErrorMessage from 'components/atoms/ErrorMessage';
import styles from './SearchForm.module.scss';

type FormData = {
  keyword: string;
};

type Props = {
  defaultWord: string;
  isLoading: boolean;
};

const SearchForm: React.FC<Props> = ({ defaultWord, isLoading }) => {
  const { register, handleSubmit, errors, setValue } = useForm<FormData>();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = handleSubmit(({ keyword }) => {
    history.push(`${location.pathname}/?keyword=${keyword}`);
  });

  useEffect(() => {
    setValue('keyword', defaultWord);
  }, [setValue, defaultWord]);

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <FontAwesomeIcon
          className={`${icon.mr} ${isLoading && icon.loading}`}
          icon={isLoading ? faSpinner : faSearch}
        />
        <input
          className={styles.input}
          name="keyword"
          type="search"
          defaultValue={defaultWord}
          ref={register({ required: '検索ワードを入力してください' })}
        />
      </div>
      <ErrorMessage message={errors.keyword?.message} />
    </form>
  );
};

export default SearchForm;
