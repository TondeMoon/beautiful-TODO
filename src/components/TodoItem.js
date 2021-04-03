import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles, TextField } from '@material-ui/core';

import { deleteTodo, editTodo } from '../actions/actions';
import './Todo.css';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [label, setLabel] = useState(todo.label);
  const handleClick = (id) => dispatch(deleteTodo(todo.id));

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
    <div className="todoItem">
      <div className="idLabel">
        <div className="id">
          <h4>#{todo.id}</h4>
        </div>
        <div>
          {editable ? (
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                type="text"
                onChange={(e) => setLabel(e.target.value)}
                value={label}
              />
            </form>
          ) : (
            <h4>{todo.label}</h4>
          )}
        </div>
      </div>
      <div className={classes.root}>
        <Button
          onClick={() => {
            dispatch(
              editTodo({
                ...todo,
                label: label,
              })
            );
            if (editable) {
              setLabel(todo.label);
            }
            setEditable(!editable);
          }}
          variant="contained"
          color="primary"
        >
          {editable ? 'Обновить' : 'Редактировать'}
        </Button>
        &nbsp;
        <Button
          onClick={() => handleClick(todo.id)}
          variant="contained"
          color="secondary"
        >
          &nbsp; Удалить &nbsp;
        </Button>
      </div>
    </div>
  );
};
