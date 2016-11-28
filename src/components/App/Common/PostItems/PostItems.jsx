import React, { Component } from 'react';
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
      console.log(this.props.products, 'products');
      return this.props.products.map((item, i) =>
        <PostItem
          key={i}
          title={item.title}
          images={item.images}
          description={item.description}
          price={item.price}
          id={item.post_id}
          changeProduct={this.props.changeProduct}
          onClick={() => this.props.changeProduct(console.log(i, 'going here'))}

        />
      );
    }
// changeProduct(item) {
//     console.log(this.state.activeProduct[item], 'hello')
//     this.setState({
//       activeProduct: this.state.activeProduct[item],
//     });
//   }
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
