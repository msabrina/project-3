import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import MainContainer from './MainContainer/MainContainer.jsx';
import PostItems from './PostItems/PostItems.jsx';


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      post: [],
      totalResults: 0,
      searchTerm: '',
      title: '',
      image: '',
      description: ''
    }
  }

  render() {
    return (
      <div className="app">
        <div className="Header">
          <Header />

          <h1>Hi there</h1>
        </div>
        <MainContainer />
        <PostItems />
      </div>
    );
  }
}

export default App;
