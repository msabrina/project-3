import React from 'react';
import SelectedItem from './SelectedItem/SelectedItem.jsx';
import Profile from './Profile/Profile.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';
import './MainContainer.css';

const MainContainer = props => (
  <div className="main-container">
    <SelectedItem />
    <Profile />
    <CreatePost />
  </div>
  );

export default MainContainer;
