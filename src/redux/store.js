import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; //import your slice reducers here

const store = configureStore({
  reducer: {
    auth: authReducer, //add your slice reducers here
  },
});

export default store;
