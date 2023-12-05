import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isOpened: boolean;
};

const initialState: InitialStateType = {
  isOpened: false,
};

const registrationLinkSlice = createSlice({
  name: "registrationLink",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { changeStatus } = registrationLinkSlice.actions;

export default registrationLinkSlice.reducer;
