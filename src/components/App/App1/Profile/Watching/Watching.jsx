import React from 'react';
import WatchItems from './WatchItems/WatchItems.jsx';
import styles from './Watching.css';

const Watching = props => (
  <div className={styles["watching"]}>
    <h3>Watching</h3>
    <WatchItems />
  </div>
  )

export default Watching;
