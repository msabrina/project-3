import React, { Component } from 'react';
import styles from './HomePage.css';


class HomePage extends Component {
render() {
    return (
      <div className={styles['home-page']}>
        <div className={styles['home-logo']}>
          <img src="" alt="Logo"></img>
          <h1>chairShare</h1>
        </div>
        <div className={styles['home-content']}>
          <form className={styles['home-form']}>
            <h2>Sign Up</h2>
            <div className={styles['home-input']}>
            <p>First Name</p>
            <input />
            </div>
            <div className={styles['home-input']}>
            <p>Last Name</p>
            <input />
            </div>
            <div className={styles['home-input']}>
            <p>Email</p>
            <input />
            </div>
            <div className={styles['home-input']}>
            <p>Password</p>
            <input />
            </div>
            <button>Apply!</button>
          </form>
        <button>Log In</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
