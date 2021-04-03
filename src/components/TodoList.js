import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import './Todo.css';

export const TodoList = () => {
  let todos = useSelector((state) => state.todos);
  let filtered = useSelector((state) => state.filtered);

  if (!todos || !todos.length) {
    return <h3> Все сделано!</h3>;
  }

  return (
    <div>
      <div className="todoList">
        {todos
          .filter((todo) => todo.label.includes(filtered))
          .map((todo) => (
            <li key={todo.id}>
              <TodoItem key={todo.id} todo={todo} />
            </li>
          ))}
      </div>
    </div>
  );
};
