import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'donor',
  initialState: {
    value: [{
      'name': 'John Doe',
      'amount': 2000,
      'message': 'I am out of town for another week and will not be able to make it :-( ... But thank you everyone for working hard! Here is my support!'
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
