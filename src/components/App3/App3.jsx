import React, { Component } from 'react';
import './App3.css';
import PostItems from './PostItems/PostItems.jsx';
import SelectedItem  from './SelectedItem/SelectedItem.jsx';

class App3 extends Component {
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

export default App3;
