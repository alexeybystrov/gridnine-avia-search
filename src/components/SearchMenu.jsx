/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SearchFilterTransfers from './SearchFilterTransfers.jsx';
import SearchSort from './SearchSort.jsx';

const SearchMenu = () => (
  <div className="col-auto border position-fixed">
    <SearchSort />
    <SearchFilterTransfers />
  </div>
);

export default SearchMenu;
