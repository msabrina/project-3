import React from 'react';
import { Link } from 'react-router';
import MyPost from './MyPost/MyPost.jsx';
import styles from './MyPostContainer.css';

const MyPostContainer = props => (
  <div className={styles["my-post-container"]}>
    <h3>My Posts</h3>
    <MyPost />
    <Link to='/create'><button className={styles["new-post"]}>Create New Post</button></Link>
  </div>
  );

export default MyPostContainer;
