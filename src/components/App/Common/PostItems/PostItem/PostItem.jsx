import React, { Component } from 'react';
import styles from './PostItem.css';

const PostItem = props => (
  <div className={styles["post-item"]} onClick={() => props.clickMethod(props.item)}>
    <div className={styles["item-desc"]}>
      <h3>{props.title}</h3>
      <p>${props.price}</p>
      <p id={styles['desc']}>{props.description}</p>
    </div>
    <div className={styles['post-img']}>
      <img src={props.images[0].url} alt={props.images[0].alt_text} />
    </div>
  </div>
  );

export default PostItem;
