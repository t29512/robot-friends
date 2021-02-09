import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='Search Robot Here'
        className='pa3 ba b--blue bg-light-green'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
