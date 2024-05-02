import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { todoRemove } from '../redux/slice';
const TodoItem = ({ data }) => {
  const selectorTodo = useSelector(todosSelector);
  const dispatch = useDispatch();

  return selectorTodo.map((el, idx) => {
    return (
      <div
        key={idx}
        className="flex items-center border-2 m-3 h-[54px] bg-gray-50 max-w-[760px] ml-10"
      >
        <div className="ml-2 mr-6 text-xs">{el.name}</div>
        <div className="text-lg overflow-auto">{el.task}</div>
        <button
          type="button"
          onClick={() => dispatch(todoRemove(idx))}
          className="ml-auto border-2 p-2 m-1 rounded-md "
        >
          Del
        </button>
      </div>
    );
  });
};

export default TodoItem;
