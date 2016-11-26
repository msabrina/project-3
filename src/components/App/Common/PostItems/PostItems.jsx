import React from 'react';
import PostItem from './PostItem/PostItem.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import styles from './PostItems.css';

const PostItems = props => (
  showProducts() {
      return props.products.map((item, i) =>
        <PostItems
          key={i}
          title={item.title}
          images={item.images}
          description={item.description}
          id={item.post_id}
          />
      )
  }

  componentWillMount() {
    this.props.getAllProducts();
  }

  <div className={styles['side-bar']}>
    {this.showProducts()}
    <SearchBox />
    <PostItem />
  </div>
  );

export default PostItems;
