import React, { Component } from 'react';
import styles from './LogIn.css';


class LogIn extends Component {
render() {
    return (
      <div className={styles['log-in']}>
        <form>
          <p>Email</p>
          <input />
          <p>Password</p>
          <input />
          <p>Code</p>
          <input />
        </form>
      </div>
    );
  }
}

export default LogIn;
