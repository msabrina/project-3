import React from 'react';
import styles from './SearchBox.css';

const SearchBox = props => (
  <div className={styles["search"]}>
    <div className={styles["search-input"]}>
      <p>Search</p>
      <input type="text"/>
    </div>
    <select className={styles["drop-down"]}>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
    </select>
  </div>
  );

export default SearchBox;
