import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, makeStyles } from '@material-ui/core';

import { findTodo } from '../actions/actions';

export const TodoSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(findTodo(search));
  };

  const onSubmitClear = (e) => {
    e.preventDefault();
    dispatch(findTodo(''));
    setSearch('');
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          type="text"
          onChange={onHandleChange}
          value={search}
          id="standard-basic"
          label="Введите слово для поиска"
        />
        <Button onClick={onSubmit} variant="contained" color="primary">
          Найти дело
        </Button>{' '}
        &nbsp;
        <Button onClick={onSubmitClear} variant="contained" color="secondary">
          Очистить поиск
        </Button>
      </form>
    </div>
  );
};
