import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    transfers: [],
    price: {
      from: null,
      upTo: null,
    },
    carriers: [],
  },
  reducers: {
    filterTransfers: (state, { payload }) => {
      if (_.includes(state.transfers, payload)) {
        _.pull(state.transfers, payload);
      } else state.transfers.push(payload);
    },
    filterPriceFrom: (state, { payload }) => {
      _.set(state.price, 'from', payload.length === 0 ? null : payload);
    },
    filterPriceUpTo: (state, { payload }) => {
      _.set(state.price, 'upTo', payload.length === 0 ? null : payload);
    },
    filterCarriers: (state, { payload }) => {
      if (_.includes(state.carriers, payload)) {
        _.pull(state.carriers, payload);
      } else state.carriers.push(payload);
    },
  },
});

export const {
  filterTransfers, filterPriceFrom, filterPriceUpTo, filterCarriers,
} = filterSlice.actions;
export default filterSlice.reducer;
