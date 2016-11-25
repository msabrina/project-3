import React, { Component } from 'react';
import styles from './App1.css';
import PostItems from './PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './../Common/Header/Header.jsx';

class App1 extends Component {

  render() {
    return (
      <div className={styles['app']}>
        <div className="Header">
          <Header />
        </div>
        <PostItems
          showProducts={this.props.showProducts}
        />
        <Profile />
      </div>
    );
  }
}

export default App1;

