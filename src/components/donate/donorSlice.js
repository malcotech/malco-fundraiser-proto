import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'donor',
  initialState: {
    value: [{
      'name': 'John Doe',
      'amount': 5,
      'message': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }],
  },
  reducers: {
    addDoner: (state, action) => {
      state.value.push(action.payload);
    }
  },
});

export const { addDoner } = slice.actions;

export default slice.reducer;
