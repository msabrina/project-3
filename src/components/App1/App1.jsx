import React, { Component } from 'react';
import './App1.css';
import PostItems from './PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import CreateUser from '../CreateUser/CreateUser.jsx';


class App1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  createUser(e) {
    e.preventDefault();
    const bodyObj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
    }
    fetch('/api/v1/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('userAuthToken', token);
    })
    .catch(err => console.log(err));
  }

  updateBodyForm(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="Header">
        </div>
        <PostItems />
        <Profile />
        <CreateUser
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          formChange={this.updateBodyForm.bind(this)}
          createUser={this.createUser.bind(this)} />
      </div>
    );
  }
}

export default App1;

