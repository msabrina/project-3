import React, { Component } from 'react';
import styles from './PostItem.css';

const PostItem = props => (
  <div className={styles["post-item"]}
    onClick={() => props.changeProduct(console.log('going here'))}>
    <div className={styles["item-desc"]}>
      <h3>Product Title {props.title}</h3>
      <img src={props.images} alt={props.title}/>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  </div>
  );

export default PostItem;
