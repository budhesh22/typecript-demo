import { combineReducers } from "@reduxjs/toolkit";
import { FakeStoreSlice } from "./reducers/FakeStoreSlice";

const rootReducer = combineReducers({
  storeData: FakeStoreSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
