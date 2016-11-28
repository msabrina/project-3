import React, { Component } from 'react';
import styles from './App2.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';
import Header from './../Common/Header/Header.jsx';


class App2 extends Component {
  render() {
    return (
      <div>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <div className={styles["app"]}>
          <PostItems
            changeProduct={this.props.changeProduct}
            products={this.props.products}
          />
          <CreatePost />
        </div>
      </div>
    );
  }
}

export default App2;
