import { combineReducers } from "@reduxjs/toolkit";
import { CounterSlice } from "./reducers/saga/CounterSlice";

const rootReducer = combineReducers({
  counter: CounterSlice.reducer,
});

export default rootReducer;
