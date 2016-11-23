import React, { Component } from 'react';
import './App1.css';
import Header from './Header/Header.jsx';
import PostItems from './PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';


class App1 extends Component {

  render() {
    return (
      <div className="app">
        <div className="Header">
        <Header />
          <h1>Hi there</h1>

        </div>
        <PostItems />
        <Profile />
      </div>
    );
  }
}

export default App1;

