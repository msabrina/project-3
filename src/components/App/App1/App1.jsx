import React, { Component } from 'react';
import styles from './App1.css';
import PostItems from './PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './../Common/Header/Header.jsx';

class App1 extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.overallState);
  }

  render() {
    return (
      <div className={styles['app']}>
        <div className="Header">
          <Header />
        </div>
        <PostItems />
        <Profile />
        {this.props.children && React.clone}
      </div>
    );
  }
}

export default App1;

