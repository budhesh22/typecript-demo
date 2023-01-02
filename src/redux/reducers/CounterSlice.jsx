import { createSlice } from "@reduxjs/toolkit";
import { DECREMENT, INCREMENT, MULTIPLY } from "../constant/actionType";

const initialState = {
  count: 1,
};

export const CounterSlice = createSlice({
  name: "fakeStoreSagaSlice",
  initialState: initialState,
  reducers: {
    COUNTER_MAIN: (state, action) => {
      switch (action.payload.type) {
        case INCREMENT:
          return {
            ...state,
            count: state.count + 1,
          };
        case DECREMENT:
          return {
            ...state,
            count: state.count - 1,
          };
        case MULTIPLY:
          return {
            ...state,
            count: state.count * 5,
          };
        default:
          return state;
      }
    },
  },
});

export const { COUNTER_MAIN } = CounterSlice.actions;
