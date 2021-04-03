export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FIND_TODO = 'FIND_TODO';

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 100),
    },
  };
}

export function editTodo(todo) {
  return { type: EDIT_TODO, payload: todo };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, payload: id };
}

export function findTodo(text) {
  return { type: FIND_TODO, payload: text };
}
