import React, { Component } from 'react';
import PostItem from './PostItem/PostItem.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import styles from './PostItems.css';

class PostItems extends Component {

    showProducts() {
      console.log(this.props.products, 'products');
      return this.props.products.map((item, i) =>
        <PostItem
          key={i}
          title={item.title}
          images={item.images}
          description={item.description}
          price={item.price}
          id={item.post_id}

        />
      );
    }
changeProduct(item) {
    console.log(this.props.activeProduct[item])
    this.setState({
      activeProduct: this.props.activeProduct[item],
    });
  }
  // componentWillMount() {
  //   this.props.getAllProducts();
  //   // this.showProducts();
  // }

  render() {
    return(
      <div className={styles['side-bar']}>
        <div className="post-items">
        </div>
        <SearchBox />
        {this.showProducts()}
      </div>
    );
  }
}
export default PostItems;
