import React from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../redux/slice';
import TodoForm from '../form/Form';
import TodoItem from './TodoItem';
const TodoList = () => {
  const dispatch = useDispatch();
  const createTodo = values => {
    dispatch(todoAdd(values));
  };
  return (
    <div className="max-h-96 bg-gray-100 overflow-auto max-w-[860px] min-h-20">
      <TodoForm createTodo={createTodo} />
      <TodoItem />
    </div>
  );
};
export default TodoList;
