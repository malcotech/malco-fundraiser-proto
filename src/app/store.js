import { configureStore } from "@reduxjs/toolkit";

// Reducers
import campaignReducer from 'Routes/campaigns/campaignsSlice';
import fundReducer from 'Routes/campaigns/fundSlice';

export default configureStore({
  reducer: {
    campaigns: campaignReducer,
    funds: fundReducer,
  }
})
