import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import RouterList from './router-list';
import './App.css';

export default class App extends Component {
  state = {
    data: {},
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <RouterList />
          </div>
        </Router>
      </div>
    );
  }
}
