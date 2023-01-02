import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  NEWS_DATA_ERROR,
  NEWS_DATA_LOADING,
  NEWS_DATA_REQUEST,
  NEWS_DATA_SUCCESS,
} from "../constant/actionType";
import { NEWS_MAIN } from "../reducers/NewsSlice";

function* newsApi() {
  yield put(NEWS_MAIN({ type: NEWS_DATA_LOADING }));
  try {
    let response = yield call(() =>
      axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=publishedAt&apiKey=ced85851a69b4b31ae9964b6a1101723"
      )
    );
    yield put(NEWS_MAIN({ type: NEWS_DATA_SUCCESS, payload: response.data }));
  } catch (error) {
    yield put(NEWS_MAIN({ type: NEWS_DATA_ERROR, error }));
  }
}

export function* newsAction() {
  yield takeEvery(NEWS_DATA_REQUEST, newsApi);
}
