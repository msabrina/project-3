import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import OverallApp from './components/OverallApp.jsx';
import App1      from './components/App1/App1.jsx';
import App2      from './components/App2/App2.jsx';
import App3      from './components/App3/App3.jsx';

module.exports = (
  <Route path='/' component={OverallApp}>
    <IndexRoute component={App1} />
    <Route path='/products' component={App2} />
    <Route path='/users' component={App3} />
  </Route>
);
