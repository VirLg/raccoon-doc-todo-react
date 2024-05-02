import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../redux/selector';

const TodoItem = ({ data }) => {
  const selectorTodod = useSelector(todosSelector);

  console.log('selectorTodod', selectorTodod);
  console.log('data', data);
  return data.map((el, idx) => {
    return (
      <div key={idx} className="flex items-center outline m-3">
        <div className="">{el.name}</div>

        <div>{el.task}</div>
        <button type="button">Del</button>
      </div>
    );
  });
};

export default TodoItem;
