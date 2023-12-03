import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserComponentProps } from "../../pages/User";

type InitialStateType = {
  currentUser: null | UserComponentProps;
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
    userLoginSuccess: (state, action: PayloadAction<UserComponentProps>) => {
      state.isFetching = false;
      state.isError = false;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isFetching = false;
      state.isError = false;
      state.currentUser = null;
    },
    getUserSuccess: (state) => {
      state.isFetching = false;
      state.isError = false;
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const {
  userFetching,
  getUserSuccess,
  logout,
  userFailure,
  userLoginSuccess,
} = profileSlice.actions;

export default profileSlice.reducer;
