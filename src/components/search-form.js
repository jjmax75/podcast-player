import './search-form.css';

import React, { useState } from 'react';

export const SearchForm = ({ handleKeyPress }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form>
      <input
        className='search-box'
        type='text'
        placeholder='Search for a podcast'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={e => handleKeyPress(e)}
      />
    </form>
)};
