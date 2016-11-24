import React from 'react';
import styles from './PostItem.css';

const PostItem = props => (
  <div className={styles["post-item"]}>
    <div className={styles["item-desc"]}>
      <h3>Product Title</h3>
      <p>Product Description. yada yada yada. here's my description</p>
    </div>
    <img src="" alt="Product Image"/>
  </div>
  );

export default PostItem;
