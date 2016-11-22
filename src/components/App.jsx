import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import MainContainer from './MainContainer/MainContainer.jsx';
import PostItems from './PostItems/PostItems.jsx';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="Header">

        <Header />
          <h1>Hi there</h1>
        </div>
        <Main-Container />
        <h2></h2>
        <Post-Items />
      </div>
    );
  }
}

export default App;
