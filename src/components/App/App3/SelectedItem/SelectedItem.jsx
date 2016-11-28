import React, { Component } from 'react';
import ProductBox from './ProductBox/ProductBox.jsx';
// import RelatedItems from './RelatedItems/RelatedItems.jsx';
import styles from './SelectedItem.css';

class SelectedItem extends Component {
   constructor(props) {
    super(props);
  }
    render(){
      if(!this.state.edit)
      return (
        <div className={styles["selected-item"]}>
          <h1>Selected Product</h1>
          <ProductBox
            active={this.props.activeProduct}
            product={this.props.products}
            // onClick={this.props.editProducts}
          />
        </div>
        );
      else {

      }
  }
}

export default SelectedItem;
