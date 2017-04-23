import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
    <nav>
      <NavLink to="/">Home</NavLink>{' '}
      <NavLink to="/fun">Fun</NavLink>{' '}
      <NavLink to="/about">About</NavLink>{' '}
      <NavLink to="/contact">Contact</NavLink>{' '}
    </nav>
  </header>
);
export default Header;
