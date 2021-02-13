import { combineReducers } from '@reduxjs/toolkit';
import flightsReducer from './flightsSlice.js';
import sortReducer from './sortSlice.js';

export default combineReducers({
  flights: flightsReducer,
  sort: sortReducer,
});
