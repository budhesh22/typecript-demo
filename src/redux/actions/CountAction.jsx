import { put, takeEvery } from "redux-saga/effects";
import { DECREMENT, INCREMENT, MULTIPLY } from "../constant/actionType";
import { COUNTER_MAIN } from "../reducers/CounterSlice";

function* CountIncDcr(action) {
  yield put(COUNTER_MAIN(action));
}

export function* CountAction() {
  yield takeEvery([INCREMENT, DECREMENT, MULTIPLY], CountIncDcr);
}
