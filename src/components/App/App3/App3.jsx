import React, { Component } from 'react';
import styles from './App3.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import SelectedItem  from './SelectedItem/SelectedItem.jsx';
// import ProductBox from './ProductBox/ProductBox.jsx';
import Header from './../Common/Header/Header.jsx';

class App3 extends Component {
  render() {
    return (
      <div>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <div className={styles['app']}>
          <PostItems
            products={this.props.products}
            changeProduct={this.props.changeProduct}
            onClick={() => this.props.changeProduct(i)}
          />
          <SelectedItem
            product={this.props.products}
            activeProduct={this.props.activeProduct}
          />
        </div>
      </div>
    );
  }
}

export default App3;
