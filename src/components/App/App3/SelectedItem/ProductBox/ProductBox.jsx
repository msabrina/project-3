import React from 'react';
import './ProductBox.css';

const ProductBox = props => (
  <div className="product-box">
    {props.activeProduct}
    <div className="product-text">
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
    <img src="" alt="Product Image"/>
  </div>
  );

export default ProductBox;
