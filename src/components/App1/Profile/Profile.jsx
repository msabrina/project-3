import React from 'react';
import Watching from './Watching/Watching.jsx';
import MyPostContainer from './MyPostContainer/MyPostContainer.jsx';
import './Profile.css';

const Profile = props => (
  <div className="my-post-container">
    <h1>Profile</h1>
    <Watching />
    <MyPostContainer />
  </div>
);

export default Profile;


