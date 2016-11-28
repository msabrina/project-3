import React from 'react';
import styles from './MyPost.css';

const MyPost = props => (
  <div className={styles["my-post"]}>
    <div className={styles['post-text']}>
      <p>Post Title</p>
      <p>Post Description</p>
    </div>
    <div className={styles['post-img-del']}>
      <img src="" alt="Product Image"/>
      <button>Delete</button>
    </div>
  </div>
  );

export default MyPost;
