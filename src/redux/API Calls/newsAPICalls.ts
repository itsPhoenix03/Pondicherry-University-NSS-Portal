import toast from "react-hot-toast";
import { publicRequest } from "../../requestMethods";
import { NewsType } from "../../types";
import {
  createNewsSuccess,
  deleteNewsSuccess,
  getAllNews,
  newsFailure,
  newsFetching,
} from "../slices/newsSlice";

import { AppDispatch } from "../store";

export const fetchAllNews = async (dispatch: AppDispatch) => {
  // axios call
  dispatch(newsFetching());

  try {
    // Fetching data
    const res = await publicRequest.get("news/");

    // Success and returning the data
    dispatch(getAllNews(res.data));
  } catch (error) {
    dispatch(newsFailure());
  }
};

export const addNews = async (dispatch: AppDispatch, eventData: NewsType) => {
  // axios call
  dispatch(newsFetching());

  try {
    const res = await publicRequest.post("news/", { ...eventData });

    // Success
    dispatch(createNewsSuccess(res.data));
    toast.success("New Article Published");
  } catch (error) {
    dispatch(newsFailure());
    toast.error("Oops! Something went wrong :/");
  }
};

export const deleteNews = async (dispatch: AppDispatch, eventId: string) => {
  // axios call
  dispatch(newsFetching());

  try {
    // Deleting the event
    await publicRequest.delete(`news/${eventId}`, {
      data: { _id: eventId },
    });

    // Success
    deleteNewsSuccess(eventId);
    toast.success("Article Deleted Successfully");
  } catch (error) {
    dispatch(newsFailure());
    toast.error("Oops! Something went wrong :/");
  }
};
