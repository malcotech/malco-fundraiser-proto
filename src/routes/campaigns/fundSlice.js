import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'funds',
  initialState: {
    value: {
      currentFundId: '',
    },
  },
  reducers: {
    loadFundId: (state, action) => {
      state.value.push(action.payload);
    },
    saveFundId: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { loadFundId, saveFundId } = slice.actions;

export default slice.reducer;
