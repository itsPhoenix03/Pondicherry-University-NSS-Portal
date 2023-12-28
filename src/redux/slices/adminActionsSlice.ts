import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  signUpFormLink: string;
  isUpdated: boolean;
  isError: boolean;
};

const initialState: InitialStateType = {
  signUpFormLink: "https://forms.gle/htY1EpPMbJzgxdGV8",
  isUpdated: false,
  isError: false,
};

const adminActionSlice = createSlice({
  name: "adminActions",
  initialState,
  reducers: {
    updateSignUpFormLink: (state, action) => {
      state.signUpFormLink = action.payload;
    },
    actionSuccess: (state) => {
      state.isUpdated = true;
    },
    actionFailure: (state) => {
      state.isError = true;
    },
  },
});

export const { updateSignUpFormLink, actionFailure, actionSuccess } =
  adminActionSlice.actions;

export default adminActionSlice.reducer;
