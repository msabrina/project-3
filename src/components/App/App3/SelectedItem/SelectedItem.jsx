import React from 'react';
import ProductBox from './ProductBox/ProductBox.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import styles from './SelectedItem.css';

const SelectedItem = props => (
  <div className={styles["selected-item"]}>
    <h1>Selected Product</h1>
    <ProductBox />
    <button>Add to Watchlist</button>
  </div>
  );

export default SelectedItem;
