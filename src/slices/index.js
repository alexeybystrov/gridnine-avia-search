import { combineReducers } from '@reduxjs/toolkit';
import flightsReducer from './flightsSlice.js';
import sortReducer from './sortSlice.js';
import filterReducer from './filterSlice';

export default combineReducers({
  flights: flightsReducer,
  sort: sortReducer,
  filter: filterReducer,
});
