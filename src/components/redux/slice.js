import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  modal: false,
  todo: [],
};

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: initialState,
  reducers: {
    modalShow(state, action) {
      state.modal = action.payload;
    },

    todoAdd: (state, action) => {
      let updatedTodo;
      if (!action.payload.date) {
        updatedTodo = [
          ...state.todo,
          { ...action.payload, date: moment().format('Y-MM-DD') },
        ];
      } else {
        updatedTodo = [...state.todo, { ...action.payload }];
      }

      return {
        ...state,
        todo: updatedTodo,
      };
    },
    //   todoAdd: (state, action) => {
    //     let obj;
    // if (!action.payload.date) {
    //       obj =  {
    //         ...action.payload,
    //         date: '',
    //       };
    //     } else {
    //      obj =  {
    //         ...action.payload
    //       }
    //     }

    //     // state.todo = [...state.todo, action.payload];
    //   },
    todoRemove(state, action) {
      state.todo = state.todo.filter((_, idx) => idx !== action.payload);
    },
  },
});
// , favorite, searched
export const { modalShow, todoAdd, todoRemove } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
