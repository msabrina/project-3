import React from 'react';
import './Profile.css';
import MyPost from './MyPost/MyPost.jsx';
import Watching from './Watching/Watching.jsx';
import MyPostContainer from './MyPostContainer/MyPostContainer.jsx';

const MyPostContainer = props => {
  <div className="my-post-container">
    <h1>Profile</h1>
    <div className="post-watching-box">
      <MyPost />
      <Watching />
    </div>
  </div>
}

export default MyPostContainer;


