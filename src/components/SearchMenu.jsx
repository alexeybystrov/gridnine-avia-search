/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SearchSort from './SearchSort.jsx';
import SearchFilterTransfers from './SearchFilterTransfers.jsx';
import SearchFilterPrice from './SearchFilterPrice.jsx';
import SearchFilterCarriers from './SearchFilterCarriers.jsx';

const SearchMenu = () => (
  <div className="col-auto border position-fixed">
    <SearchSort />
    <SearchFilterTransfers />
    <SearchFilterPrice />
    <SearchFilterCarriers />
  </div>
);

export default SearchMenu;
