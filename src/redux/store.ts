import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";

const rootReducer = {
  profile: profileSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
