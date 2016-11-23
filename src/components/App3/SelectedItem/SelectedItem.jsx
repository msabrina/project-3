import React from 'react';
import ProductBox from './ProductBox/ProductBox.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import './SelectedItem.css';

const SelectedItem = props => (
  <div className="selected-item">
    <h1>Selected Product</h1>
    <ProductBox />
    <RelatedItems />
  </div>
  );

export default SelectedItem;