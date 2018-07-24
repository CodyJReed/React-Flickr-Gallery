import React from 'react';
import search from '../search.svg';


const SearchForm = () => (
  <form className={"search-form"}>
    <input type="search" placeholder="Search" />
    {' '}
    <button type="submit">
      <img src={search} alt="Search Icon" />
    </button>
  </form>

);

export default SearchForm;
