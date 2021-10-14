import { configureStore } from "@reduxjs/toolkit";

// Reducers
import donorReducer from '../components/donate/donorSlice';

export default configureStore({
  reducer: {
    donor: donorReducer,
  }
})
