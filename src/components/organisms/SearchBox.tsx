import React from 'react';
import SearchForm from 'components/molecules/SearchForm';
import styles from './SearchBox.module.scss';

type Props = {
  defaultWord: string;
  isLoading: boolean;
};

const SearchBox: React.FC<Props> = ({ defaultWord, isLoading }) => (
  <div className={styles.wrapper}>
    <SearchForm {...{ defaultWord, isLoading }} />
  </div>
);

export default SearchBox;
