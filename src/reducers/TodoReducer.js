import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FIND_TODO,
} from '../actions/actions';

const initialState = {
  todos: [],
  filtered: '',
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      let todosToChange = [...state.todos];

      for (let i = 0; i < todosToChange.length; i++) {
        if (todosToChange[i].id === action.payload.id) {
          todosToChange[i].label = action.payload.label;
        }
      }
      return {
        ...state,
      };
    case FIND_TODO:
      return {
        ...state,
        filtered: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todosReducer;
