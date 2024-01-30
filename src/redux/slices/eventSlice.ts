import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventType } from "../../types";

type InitialStateType = {
  events: EventType[];
  isFetching: boolean;
  isError: boolean;
};

const initialState: InitialStateType = {
  events: [],
  isFetching: false,
  isError: false,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventsFetching: (state) => {
      state.isFetching = true;
    },
    createEventSuccess: (state, action: PayloadAction<EventType>) => {
      state.isFetching = false;
      state.isError = false;
      state.events.unshift(action.payload);
    },
    getAllEvents: (state, action: PayloadAction<EventType[]>) => {
      state.isFetching = false;
      state.isError = false;
      state.events = action.payload;
    },
    eventsFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    deleteEventSuccess: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.isError = false;
      state.events = state.events.filter((e) => e._id !== action.payload);
    },
  },
});

export const {
  eventsFetching,
  getAllEvents,
  eventsFailure,
  deleteEventSuccess,
  createEventSuccess,
} = eventSlice.actions;

export default eventSlice.reducer;
