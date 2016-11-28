import React from 'react';
import styles from './ProfileInfo.css';

const ProfileInfo = props => (
  <div className={styles["profile-info"]}>
    <h3>Profile Info</h3>
    <p>First Name: USER NAME GOES HERE</p>
    <p>Last Name: USER NAME GOES HERE</p>
    <p>Email: USER EMAIL GOES HERE</p>
    <button className={styles['profile-edit']}>Edit</button>
  </div>
  )

export default ProfileInfo;
