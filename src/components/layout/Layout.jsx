import { Suspense } from 'react';
import Header from '../header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <ul style={{ listStyle: 'none', display: 'block' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ul>
      </main>
    </>
  );
};

export default Layout;
