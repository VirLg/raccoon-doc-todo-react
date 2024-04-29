import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'aqua' }}>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '16px',
            listStyle: 'none',
          }}
        >
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/delete">Delete Todo</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
