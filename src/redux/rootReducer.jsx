import { combineReducers } from "@reduxjs/toolkit";
import { CounterSlice } from "./reducers/CounterSlice";
import { FakeStoreSlice } from "./reducers/FakeStoreSlice";

const rootReducer = combineReducers({
  counter: CounterSlice.reducer,
  fakeStore: FakeStoreSlice.reducer,
});

export default rootReducer;
