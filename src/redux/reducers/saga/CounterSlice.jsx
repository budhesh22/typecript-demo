import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "fakeStoreSagaSlice",
  initialState: initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.count = action.payload;
    },
    decrementCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter } = CounterSlice.actions;
