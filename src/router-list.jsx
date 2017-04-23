import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Fun from './components/fun';

const RouterList = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/fun" component={Fun} />
    <Route exact path="/Contact" component={Contact} />
  </div>
);

export default RouterList;
