import React, { useEffect, useState } from 'react';
import { InputBase } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useStyles } from './useStyles';
import { useDebounce } from './debounce';
import { fetchSearch } from '../../store/middlewares';
import { filmStatus } from '../../store/actions';
import { useDispatch } from 'react-redux';

export const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const [searchValue, changeSearchValue] = useState(null);

  const search = useDebounce(searchValue, 1500);

  useEffect(() => {
    if (search && search.length > 2) {
      dispatch(filmStatus({ status: null }));
      dispatch(fetchSearch({ search }));
      changeSearchValue(null);
    }
  }, [search, dispatch]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
    };
  };

  const onSubmit = value => {
    const { search } = value;
    changeSearchValue(search);
  };
  
  return (
    <form onChange={handleSubmit(onSubmit)} onKeyPress={handleKeyPress}>
      <Controller
        as={InputBase}
        control={control}
        name='search'  
        onChange={args => args[0].nativeEvent.text} 
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        fullWidth
        defaultValue=""
        rules={{ required: true }}
      ></Controller>
    </form>
  )
}
