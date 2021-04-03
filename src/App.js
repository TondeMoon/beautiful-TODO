import React from 'react';

import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { TodoSearch } from './components/TodoSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Список дел</h1>
      <TodoList />
      <TodoInput />
      <TodoSearch />
    </div>
  );
}

export default App;
