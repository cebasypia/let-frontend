import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  searchWord: string;
};

const SearchForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ searchWord }) => {
    /* eslint-disable-next-line */
    console.log(searchWord);
  });

  return (
    <form onSubmit={onSubmit}>
      <input name="searchWord" ref={register({ required: true })} />
      {errors.searchWord && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
