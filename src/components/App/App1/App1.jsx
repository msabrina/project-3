import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './App1.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './../Common/Header/Header.jsx';

class App1 extends Component {

  render() {
    return (
      <div>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <div className={styles['app']}>
        <PostItems
          products={this.props.products}
        />
        <Profile />
        </div>
      </div>
    );
  }
}

export default App1;

