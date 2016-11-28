import React from 'react';
import styles from'./WatchItems.css';

const WatchItems = props => (
  <div className={styles["watch-items"]}>
    <div className={styles['watch-info']}>
      <p>Product Title</p>
      <p>Description</p>
    </div>
    <div className={styles["watch-pic-delete"]}>
      <img src="" alt="Product Image"/>
      <button>Delete</button>
    </div>
  </div>
  )

export default WatchItems;
