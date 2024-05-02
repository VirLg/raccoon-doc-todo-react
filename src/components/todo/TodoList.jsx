import React from 'react';
import { data } from './data';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../redux/slice';
import TodoForm from '../form/Form';
import TodoItem from './TodoItem';
const TodoList = () => {
  const dispatch = useDispatch();
  const createTodo = values => {
    console.log('values', values);
    dispatch(todoAdd(values));
  };
  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoItem data={data} />
    </div>
  );
};
export default TodoList;
