import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Header    from './Common/Header/Header.jsx';
import App1      from './App/App1/App1.jsx';
import App2      from './App/App2/App2.jsx';
import App3      from './App/App3/App3.jsx';

class OverallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      totalResults: 0,
      searchTerm: '',
      title: '',
      image: '',
      description: ''
    };
  }

  setOverallState(obj) {
    this.setState(obj);
  }

  doLogin(email, password) {
    const bodyObj = {
      email: email,
      password: password,
    }
    fetch('/api/v1/users/login', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then(token => {
      console.log(token);
      localStorage.setItem('userAuthToken', token);
    })
    .catch(err => console.log(err));
  }

  // createUser() {
  //   fetch('/api/v1/users', {
  //     method: 'POST',
  //     body:
  //   })
  // }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          doLogin: this.doLogin.bind(this),
          setOverallState: this.setOverallState.bind(this),
          overallState: this.state,
        })}
      </div>
    );
  }
}

export default OverallApp;
