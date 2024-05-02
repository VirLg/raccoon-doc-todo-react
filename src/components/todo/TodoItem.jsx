import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { todoRemove } from '../redux/slice';
const TodoItem = ({ data }) => {
  const selectorTodod = useSelector(todosSelector);
  const dispatch = useDispatch();
  const handleClick = idx => {
    dispatch(todoRemove(idx));
  };
  return selectorTodod.map((el, idx) => {
    return (
      <div key={idx} className="flex items-center outline m-3">
        <div className="">{el.name}</div>

        <div>{el.task}</div>
        <button type="button" onClick={() => dispatch(todoRemove(idx))}>
          Del
        </button>
      </div>
    );
  });
};

export default TodoItem;
