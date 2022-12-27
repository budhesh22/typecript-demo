import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { stateData } from "../../interfaces/fakeStoreInterFace";

const initialState: stateData = {
  loading: false,
  message: {
    status_code: null,
    success: false,
  },
  result: {
    data: [],
  },
  error: {
    message: null,
  },
};

export const FakeStoreSlice = createSlice({
  name: "fakeStoreData",
  initialState: initialState,
  reducers: {
    SET_FAKE_STORE_DATA_LOADING: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    SET_FAKE_STORE_DATA_MESSAGE: (state, action) => ({
      ...state,
      message: {
        ...state.message,
        status_code: action.payload.status_code,
        success: action.payload.success,
      },
    }),
    SET_FAKE_STORE_DATA_SUCCESS: (state, action) => ({
      ...state,
      result: {
        ...state.result,
        data: action.payload,
      },
    }),
    SET_FAKE_STORE_DATA_ERROR: (state, action) => ({
      ...state,
      error: {
        ...state.error,
        message: action.payload,
      },
    }),
  },
});

export const {
  SET_FAKE_STORE_DATA_LOADING,
  SET_FAKE_STORE_DATA_SUCCESS,
  SET_FAKE_STORE_DATA_MESSAGE,
  SET_FAKE_STORE_DATA_ERROR,
} = FakeStoreSlice.actions;

export const FAKE_STORE_LOADING = (state: RootState) => state.storeData.loading;
export const FAKE_STORE_MESSAGE = (state: RootState) => state.storeData.message;
export const FAKE_STORE_RESULT = (state: RootState) =>
  state.storeData.result.data;
export const FAKE_STORE_ERROR = (state: RootState) => state.storeData.error;
