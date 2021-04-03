import reducer, { initialState } from './TodoReducer';
import '@testing-library/jest-dom/';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      todos: [],
      filtered: '',
    });
  });
});
