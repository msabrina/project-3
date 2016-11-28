import React, { Component } from 'react';
import { Link } from 'react-router';
import PostItem from './PostItem/PostItem.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import styles from './PostItems.css';

class PostItems extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   // activeProduct: products[0],
    //   // products: [],
    // };
  }

    showProducts() {
      return this.props.products.map((item, i) =>
        <Link to='/product'>
        <PostItem
          key={i}
          title={item.title}
          images={item.images}
          description={item.description}
          price={item.price}
          id={item.post_id}
          product={item.product}
          item={item}
          clickMethod={this.props.changeProduct}

        />
        </Link>
      );
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
