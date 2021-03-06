import React from 'react';
import styles from './ProductBox.css';

const ProductBox = props => (
  <div className={styles["product-box"]}>
    <div className={styles["product-text"]}>
      <p>Title:</p>
      <p>{props.active.title}</p>
      <p>{props.active.price}</p>
      <p>Description:</p>
      <p>{props.active.description}</p>
      <p>Contact User: rich@rich.com</p>
    </div>
    <div className={styles['photo-box']}>
      <img className={styles['main-photo']} src={props.active.images[0].url} alt={props.active.images[0].url}/>
      <div className={styles['small-photo-box']}>
        <img src="/chairShare.png" alt="Image 1"/>
        <img src="/chairShare.png" alt="Image 2"/>
        <img src="/chairShare.png" alt="Image 3"/>
        <img src="/chairShare.png" alt="Image 4"/>
      </div>
    </div>
  </div>
  );

export default ProductBox;
