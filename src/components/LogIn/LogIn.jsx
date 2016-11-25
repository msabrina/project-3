import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './LogIn.css';


class LogIn extends Component {
render() {
    return (
      <div className={styles['log-in']}>
      <Link to="/app">App1</Link>
        <form>
          <p>Email</p>
          <input />
          <p>Password</p>
          <input />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
