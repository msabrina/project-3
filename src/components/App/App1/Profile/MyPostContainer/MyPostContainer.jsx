import React from 'react';
import MyPost from './MyPost/MyPost.jsx';
import './MyPostContainer.css';

const MyPostContainer = props => (
  <div className="my-post-container">
    <h3>My Posts</h3>
    <MyPost />
    <button>Submit New Post</button>
  </div>
  );

export default MyPostContainer;
