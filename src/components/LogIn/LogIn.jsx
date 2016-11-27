import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './LogIn.css';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  doLogin(e) {
    console.log('here')
    e.preventDefault();
    const bodyObj = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(bodyObj);
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

  updateEmailForm(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updatePasswordForm(e) {
    this.setState({
      password: e.target.value,
    });
  }

render() {
    return (
      <div className={styles['log-in']}>
      <Link to="/app">App1</Link>

          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmailForm.bind(this)}

          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.updatePasswordForm.bind(this)}
          />
          <button onClick={this.doLogin.bind(this)}>Log In</button>

      </div>
    );
  }
}

export default LogIn;
