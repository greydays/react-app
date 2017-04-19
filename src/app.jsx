import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import Fun from './components/fun';
import About from './components/about';
import Contact from './components/contact';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    data: {},
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <nav>
              <ul>
                <NavLink to="/fun">Fun</NavLink>{' '}
                <NavLink to="/about">About</NavLink>{' '}
                <NavLink to="/contact">Contact</NavLink>{' '}
              </ul>
            </nav>
            <Route path="/about" component={About} />
            <Route path="/fun" component={Fun} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}
