import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Header    from './Common/Header/Header.jsx';
import App1      from './App1/App1.jsx';
import App2      from './App2/App2.jsx';
import App3      from './App3/App3.jsx';

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
        'Content-Type': 'application/json',
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



  postProduct() {
    e.preventDefault();
    const productObj = {
      title: this.state.title,
      description: this.state.description
    }
    fetch('/api/v1/products', {
      headers: {
        Token_Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify(productObj)
    });
  }

  render() {
    return (
      <div>
      <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          overallState: this.state,
          setOverallState: this.setOverallState.bind(this),
          doLogin: this.doLogin.bind(this),
        })}
      </div>
    );
  }
}

export default OverallApp;
