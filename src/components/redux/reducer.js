import { combineReducers } from 'redux';
import { todoReducer } from './slice';
export const reducer = combineReducers({
  todo: todoReducer,
  //   sort: filterReducer,
  //   modalShow: modalReducer,
  //   idx: activIdxReducer,
});
