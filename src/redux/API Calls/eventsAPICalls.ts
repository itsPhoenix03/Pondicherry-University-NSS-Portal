import { publicRequest } from "../../requestMethods";
import { EventType } from "../../types";
import {
  createEventSuccess,
  deleteEventSuccess,
  eventsFailure,
  eventsFetching,
  getAllEvents,
} from "../slices/eventSlice";
import { AppDispatch } from "../store";

export const fetchAllEvents = async (dispatch: AppDispatch) => {
  // axios call
  dispatch(eventsFetching());

  try {
    // Fetching data
    const res = await publicRequest.get("event/");

    // Success and returning the data
    dispatch(getAllEvents(res.data));
  } catch (error) {
    dispatch(eventsFailure());
  }
};

export const addEvent = async (dispatch: AppDispatch, eventData: EventType) => {
  // axios call
  dispatch(eventsFetching());

  try {
    const res = await publicRequest.post("event/", { ...eventData });

    // Success
    dispatch(createEventSuccess(res.data));
  } catch (error) {
    dispatch(eventsFailure());
  }
};

export const deleteEvent = async (dispatch: AppDispatch, eventId: string) => {
  // axios call
  dispatch(eventsFetching());

  try {
    // Deleting the event
    await publicRequest.delete(`event/${eventId}`, {
      data: { _id: eventId },
    });

    // Success
    deleteEventSuccess(eventId);
  } catch (error) {
    dispatch(eventsFailure());
  }
};
