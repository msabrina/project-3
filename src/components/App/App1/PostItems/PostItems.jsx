import React from 'react';
import PostItem from './PostItem/PostItem.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import styles from './PostItems.css';

const PostItems = props => (

  <div className={styles['side-bar']}>
    <SearchBox />
    <PostItem />
  </div>
  );

export default PostItems;
