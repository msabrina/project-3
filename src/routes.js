import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import OverallApp from './components/OverallApp.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import CreateUser from './components/CreateUser/CreateUser.jsx';
import LogIn     from './components/LogIn/LogIn.jsx';
import App1      from './components/App/App1/App1.jsx';
import App2      from './components/App/App2/App2.jsx';
import App3      from './components/App/App3/App3.jsx';

module.exports = (
  <Route path='/' component={OverallApp}>
    <IndexRoute component={HomePage} />
    <Route path='/signup' component={CreateUser} />
    <Route path='/login' component={LogIn} />
    <Route path='/app'>
      <IndexRoute component={App1} />
      <Route path='/profile' component={App1} />
      <Route path='/create' component={App2} />
      <Route path='/product' component={App3} />
    </Route>
  </Route>
);
