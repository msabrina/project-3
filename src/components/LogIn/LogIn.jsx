import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './LogIn.css';


class LogIn extends Component {
render() {
    return (
      <div className={styles['log-in']}>
        <form className={styles['log-box']}>
          <div className={styles["home-logo"]}>
            <img src="/chairShare.png" alt="Logo" />
            <h1>chairShare</h1>
          </div>
          <div className={styles['input-box']}>
          <div className={styles['email-box']}>
            <p id={styles['email']}>Email</p>
            <input />
          </div>
          <div className={styles['password-box']}>
            <p id={styles['password']}>Password</p>
            <input />
          </div>
          <button><Link className={styles['app-button']} to="/app"> Log In </Link></button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
