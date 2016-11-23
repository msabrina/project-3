import React from 'react';
import './SearchBox.css';

const SearchBox = props => (
  <div className="search">
    <div>
      <p>Search</p>
      <input type="text"/>
    </div>
    <select>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
    </select>
  </div>
  );

export default SearchBox;
