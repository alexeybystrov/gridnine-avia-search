import { createSlice } from '@reduxjs/toolkit';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: null,
  // reducers: {
  //   smthng: (state, { payload }) => (payload),
  // },
});

// export const { smthng } = flightsSlice.actions;
export default flightsSlice.reducer;
