import React from 'react';
import styles from './ProfileInfo.css';

const ProfileInfo = props => (
  <div className={styles["profile-info"]}>
    <h3>Profile Info</h3>
    <p>First Name: <input placeholder="USER NAME HERE" value="" /></p>
    <p>Last Name: <input placeholder="USER NAME HERE" value="" /></p>
    <p>Email: <input placeholder="USER EMAIL HERE" value="" /></p>
    <button className={styles['profile-edit']}>Edit</button>
  </div>
  )

export default ProfileInfo;
