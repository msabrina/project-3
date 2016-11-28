import React from 'react';
import './ProductBox.css';

const ProductBox = props => (
  <div className="product-box">

    <div className="product-text">
      <p>{props.active.title}</p>
      <p>{props.active.description}</p>
      <p>{props.active.price}</p>
    </div>
    <img src={props.active.images[0].url} alt={props.active.images[0].url}/>
  </div>
  );

export default ProductBox;
