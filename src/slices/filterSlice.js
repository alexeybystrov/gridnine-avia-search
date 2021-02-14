import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { transfers: [], carriers: [] },
  reducers: {
    filterTransfers: (state, { payload }) => {
      // console.log(payload);
      if (_.includes(state.transfers, payload)) {
        _.pull(state.transfers, payload);
      } else state.transfers.push(payload);
    },
    filterCarriers: (state, { payload }) => {
      // console.log(payload);
      if (_.includes(state.carriers, payload)) {
        _.pull(state.carriers, payload);
      } else state.carriers.push(payload);
    },
  },
});

export const { filterTransfers, filterCarriers } = filterSlice.actions;
export default filterSlice.reducer;
