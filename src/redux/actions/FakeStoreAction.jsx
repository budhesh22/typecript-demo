import { call, put, takeEvery } from "redux-saga/effects";
import {
  FAKE_STORE_ACTION_MAIN,
  FAKE_STORE_DATA_ERROR,
  FAKE_STORE_DATA_LOADING,
  FAKE_STORE_DATA_SUCCESS,
} from "../constant/actionType";
import { FAKE_STORE_MAIN } from "../reducers/FakeStoreSlice";

function* fakeStoreAPI() {
  yield put(FAKE_STORE_MAIN({ type: FAKE_STORE_DATA_LOADING, loading: true }));
  try {
    const storeAPI = yield call(() =>
      fetch("https://fakestoreapi.com/products")
    );
    const response = yield storeAPI.json();
    yield put(FAKE_STORE_MAIN({ type: FAKE_STORE_DATA_SUCCESS, response }));
  } catch (error) {
    yield put(FAKE_STORE_MAIN({ type: FAKE_STORE_DATA_ERROR, error }));
  }
}

export function* FakeStoreAction() {
  yield takeEvery(FAKE_STORE_ACTION_MAIN, fakeStoreAPI);
}
