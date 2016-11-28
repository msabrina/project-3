import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './App1.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './../Common/Header/Header.jsx';

class App1 extends Component {
  // componentWillMount() {
  //   this.props.getAllProducts();
  //   // this.showProducts();
  // }
  render() {
    return (
      <div>
      <Link to="/product">App3</Link>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <PostItems
            changeProduct={this.props.changeProduct}
          products={this.props.products}
        />
        <div className={styles['app']}>
        <Profile />
        </div>
      </div>
    );
  }
}

export default App1;

