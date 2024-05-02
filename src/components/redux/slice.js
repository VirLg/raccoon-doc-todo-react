import { createSlice } from '@reduxjs/toolkit';
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
    todoAdd(state, action) {
      state.todo = [...state.todo, action.payload];
    },
  },
});
// , favorite, searched
export const { modalShow, todoAdd } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
