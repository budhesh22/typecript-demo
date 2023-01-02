import { combineReducers } from "@reduxjs/toolkit";
import { CounterSlice } from "./reducers/CounterSlice";
import { FakeStoreSlice } from "./reducers/FakeStoreSlice";
import { NewsSlice } from "./reducers/NewsSlice";

const rootReducer = combineReducers({
  counter: CounterSlice.reducer,
  fakeStore: FakeStoreSlice.reducer,
  news: NewsSlice.reducer,
});

export default rootReducer;
