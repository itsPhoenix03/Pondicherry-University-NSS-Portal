import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsType } from "../../types";

type InitialStateType = {
  allNews: NewsType[];
  isFetching: boolean;
  isError: boolean;
};

const initialState: InitialStateType = {
  allNews: [],
  isFetching: false,
  isError: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching: (state) => {
      state.isFetching = true;
    },
    createNewsSuccess: (state, action: PayloadAction<NewsType>) => {
      state.isFetching = false;
      state.isError = false;
      state.allNews.unshift(action.payload);
    },
    getAllNews: (state, action: PayloadAction<NewsType[]>) => {
      state.isFetching = false;
      state.isError = false;
      state.allNews = action.payload;
    },
    newsFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    deleteNewsSuccess: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.isError = false;
      state.allNews = state.allNews.filter((e) => e._id === action.payload);
    },
  },
});

export const {
  newsFetching,
  createNewsSuccess,
  getAllNews,
  newsFailure,
  deleteNewsSuccess,
} = newsSlice.actions;

export default newsSlice.reducer;
