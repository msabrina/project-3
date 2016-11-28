import React from 'react';
import styles from './ProductBox.css';

const ProductBox = props => (
  <div className={styles["product-box"]}>
    <div className={styles["product-text"]}>
      <p>Title:</p>
      <p>HERE IS THE SPECIFIC TITLE</p>
      <p>Description:</p>
      <p>HERE IS THE SPECIFIC DESCRIPTION. YADA YADA YADA YADA YADA YADA...</p>
    </div>
    <div className={styles['photo-box']}>
      <img className={styles['main-photo']} src="" alt="Product Image"/>
      <div className={styles['small-photo-box']}>
        <img src="" alt="Image 1"/>
        <img src="" alt="Image 2"/>
        <img src="" alt="Image 3"/>
        <img src="" alt="Image 4"/>
      </div>
    </div>
  </div>
  );

export default ProductBox;
