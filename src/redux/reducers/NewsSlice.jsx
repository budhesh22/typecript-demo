import { createSlice } from "@reduxjs/toolkit";
import {
  NEWS_DATA_ERROR,
  NEWS_DATA_LOADING,
  NEWS_DATA_SUCCESS,
} from "../constant/actionType";

const initialState = {
  isLoading: false,
  message: {
    status: null,
  },
  result: {
    data: [],
  },
  error: {
    message: null,
  },
};
export const NewsSlice = createSlice({
  name: "newsAPI",
  initialState: initialState,
  reducers: {
    NEWS_MAIN: (state, action) => {
      switch (action.payload.type) {
        case NEWS_DATA_LOADING:
          return {
            ...state,
            isLoading: true,
          };
        case NEWS_DATA_SUCCESS:
          return {
            ...state,
            isLoading: false,
            message: {
              ...state.message,
              status: action.payload.payload.status,
            },
            result: {
              ...state.result,
              data: action.payload.payload.articles,
            },
          };
        case NEWS_DATA_ERROR:
          return {
            ...state,
            isLoading: false,
            error: {
              ...state.error,
              message: action.payload.error,
            },
          };
        default:
          return state;
      }
    },
  },
});

export const { NEWS_MAIN } = NewsSlice.actions;

export const NEWS_LOADING = (state) => state.news.isLoading;
export const NEWS_MESSAGE = (state) => state.news.message.status;
export const NEWS_SUCCESS = (state) => state.news.result.data;
export const NEWS_ERROR = (state) => state.news.error.message;
