import { createSlice } from "@reduxjs/toolkit";
import {
  FAKE_STORE_DATA_ERROR,
  FAKE_STORE_DATA_LOADING,
  FAKE_STORE_DATA_SUCCESS,
} from "../constant/actionType";

const initialState = {
  isLoading: false,
  result: {
    data: [],
  },
  message: {
    status_code: null,
    success: false,
  },
  error: {
    message: false,
  },
};

export const FakeStoreSlice = createSlice({
  name: "fakeStoreSlice",
  initialState: initialState,
  reducers: {
    FAKE_STORE_MAIN: (state, action) => {
      switch (action.payload.type) {
        case FAKE_STORE_DATA_LOADING:
          return {
            ...state,
            isLoading: true,
          };
        case FAKE_STORE_DATA_SUCCESS:
          return {
            ...state,
            isLoading: false,
            result: {
              ...state.result,
              data: action.payload.response,
            },
            message: {
              ...state.message,
              status_code: 200,
              success: true,
            },
          };
        case FAKE_STORE_DATA_ERROR:
          return {
            ...state.error,
            message: action.payload.error,
          };
        default:
          return state;
      }
    },
  },
});

export const { FAKE_STORE_MAIN } = FakeStoreSlice.actions;

export const FAKE_STORE_LOADING = (state) => state.fakeStore.isLoading;
export const FAKE_STORE_SUCCESS = (state) => state.fakeStore.result.data;
export const FAKE_STORE_MESSAGE = (state) => state.fakeStore.message;
export const FAKE_STORE_ERROR = (state) => state.fakeStore.error.message;
