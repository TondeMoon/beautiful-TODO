import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, makeStyles } from '@material-ui/core';

import { addTodo } from '../actions/actions';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const onHandleChange = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
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
          id="standard-basic"
          label="Добавить новое дело"
          onChange={onHandleChange}
          type="text"
          value={newTodo || ''}
        />
        <Button
          className="btn"
          onClick={onSubmit}
          variant="contained"
          color="primary"
        >
          Добавить дело
        </Button>
      </form>
    </div>
  );
};
