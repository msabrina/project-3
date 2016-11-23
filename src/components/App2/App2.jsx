import React, { Component } from 'react';
import './App2.css';
import Header from './Header/Header.jsx';
import PostItems from './PostItems/PostItems.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';


class App2 extends Component {
  render() {
    return (
      <div className="app">
        <div className="Header">
          <Header />

          <h1>Hi there</h1>
        </div>
        <PostItems />
      </div>
    );
  }
}

export default App2;
