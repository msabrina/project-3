import React, { Component } from 'react';
import styles from './App3.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import SelectedItem  from './SelectedItem/SelectedItem.jsx';
import Header from './../Common/Header/Header.jsx';

class App3 extends Component {
  render() {
    return (
      <div>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <div className={styles['app']}>
          <PostItems />
          <SelectedItem />
        </div>
      </div>
    );
  }
}

export default App3;
