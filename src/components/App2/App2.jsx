import React, { Component } from 'react';
import './App2.css';
import PostItems from './PostItems/PostItems.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';


class App2 extends Component {
  render() {
    return (
      <div className="app">
        <div className="Header">
        </div>
        <PostItems />
      </div>
    );
  }
}

export default App2;
