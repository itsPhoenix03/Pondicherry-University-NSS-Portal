import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types";

type InitialStateType = {
  currentUser: null | UserType;
  isFetching: boolean;
  isError: boolean;
};

const initialState: InitialStateType = {
  currentUser: null,
  isFetching: false,
  isError: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userFetching: (state) => {
      state.isFetching = true;
    },
    userLoginSuccess: (state, action: PayloadAction<UserType>) => {
      state.isFetching = false;
      state.isError = false;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isFetching = false;
      state.isError = false;
      state.currentUser = null;
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { userFetching, logout, userFailure, userLoginSuccess } =
  profileSlice.actions;

export default profileSlice.reducer;
