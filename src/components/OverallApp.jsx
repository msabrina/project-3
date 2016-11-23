import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import App1      from './App1/App1.jsx';
import App2      from './App2/App2.jsx';
import App3      from './App3/App3.jsx';

class OverallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      post: [],
      totalResults: 0,
      searchTerm: '',
      title: '',
      image: '',
      description: ''
    };
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App1} />
        <Route path='/products' component={App2} />
      </Router>
    );
  }
}

export default OverallApp;
