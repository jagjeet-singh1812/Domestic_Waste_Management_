import React from 'react';
import "./serchbox.css"
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='search-box'>
      <input
        className='search-input'
        type='search'
        placeholder='Search items'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
