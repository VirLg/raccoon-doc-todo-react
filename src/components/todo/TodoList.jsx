import React from 'react';
import { data } from './data';

import TodoForm from '../form/Form';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <TodoItem data={data} />
    </div>
  );
};
export default TodoList;
