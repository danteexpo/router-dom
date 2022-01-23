import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
      <nav>
          <ul>
              <li>
                  <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : ''}`} to='/'>HOME</NavLink>
              </li>
              <li>
                  <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : ''}`} to='/about'>ABOUT</NavLink>
              </li>
              <li>
                  <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : ''}`} to='/users'>USERS</NavLink>
              </li>
          </ul>
      </nav>
  );
};

export default Navbar;
