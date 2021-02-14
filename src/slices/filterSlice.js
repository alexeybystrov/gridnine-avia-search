import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { transfers: [] },
  reducers: {
    filterTransfers: (state, { payload }) => {
      // console.log(payload);
      if (_.includes(state.transfers, payload)) {
        _.pull(state.transfers, payload);
      } else state.transfers.push(payload);
    },
  },
});

export const { filterTransfers } = filterSlice.actions;
export default filterSlice.reducer;
