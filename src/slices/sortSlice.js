import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: '',
  reducers: {
    sortBy: (state, { payload }) => (payload),
  },
});

export const { sortBy } = sortSlice.actions;
export default sortSlice.reducer;
