import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
} from 'react-router-dom';
import { uniqueId } from 'lodash';
import Home from './components/home';
import routes from './routes';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    data: {},
  }
  render() {
    const RouteWithSubRoutes = route => (
      <Route
        path={route.path}
        render={props => (
          <route.component
            {...props}
            routes={route.routes}
          />
        )}
      />
    );
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <nav>
              <NavLink to="/">Home</NavLink>{' '}
              <NavLink to="/fun">Fun</NavLink>{' '}
              <NavLink to="/about">About</NavLink>{' '}
              <NavLink to="/contact">Contact</NavLink>{' '}
            </nav>
            <Route exact path="/" component={Home} />
            {routes.map(route => (
              <RouteWithSubRoutes key={uniqueId('route-')} {...route} />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}
