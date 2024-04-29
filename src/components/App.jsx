import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

import HomePage from './homePage/HomePage';
import DeleteTodo from './deleteTodo/DeleteTodo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route index element={<DeleteTodo />} />
      </Route>
    </Routes>
  );
};
