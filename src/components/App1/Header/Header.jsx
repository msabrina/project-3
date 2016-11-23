import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-container">

      <div className="logo">
        <img src="" alt=""/>
        <h1>chairShare</h1>
      </div>
      <nav>
        <Link to="/products">Create Post</Link>
        <Link to="/">Profile</Link>
      </nav>

      </div>
      )
  }
}

export default Header;
