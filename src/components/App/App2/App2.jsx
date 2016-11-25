import React, { Component } from 'react';
import './App2.css';
import PostItems from './PostItems/PostItems.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';
import Header from './../Common/Header/Header.jsx';


class App2 extends Component {
  render() {
    return (
      <div className="app">
        <div className="Header">
          <Header />
        </div>
        <PostItems />
        <CreatePost />
      </div>
    );
  }
}

export default App2;
