import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Watching from './Watching/Watching.jsx';
import MyPostContainer from './MyPostContainer/MyPostContainer.jsx';
import styles from './Profile.css';

const Profile = props => (
  <div className={styles['profile']}>
    <h1>Profile</h1>
    <div className={styles['profile-box']}>
    <div className={styles['my-box']}>
      <ProfileInfo />
      <MyPostContainer />
    </div>
    <div className={styles['watch-box']}>
      <Watching />
    </div>
    </div>
  </div>
);

export default Profile;


