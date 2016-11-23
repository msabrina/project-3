import React, { Component } from 'react';
import './App3.css';
import Header from './Header/Header.jsx';
import PostItems from './PostItems/PostItems.jsx';
import SelectedItem  from './SelectedItem/SelectedItem.jsx';

class App3 extends Component {
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

export default App3;
