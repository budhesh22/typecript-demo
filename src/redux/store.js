import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { CountAction } from "./actions/CountAction";
import { FakeStoreAction } from "./actions/FakeStoreAction";
import { newsAction } from "./actions/NewsAction";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(CountAction);
sagaMiddleware.run(FakeStoreAction);
sagaMiddleware.run(newsAction);

export default store;
