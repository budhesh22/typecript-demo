import {
  SET_FAKE_STORE_DATA_LOADING,
  SET_FAKE_STORE_DATA_SUCCESS,
  SET_FAKE_STORE_DATA_MESSAGE,
  SET_FAKE_STORE_DATA_ERROR,
} from "../reducers/FakeStoreSlice";
import { AppDispatch } from "../store";

const FakeStoreAction = () => async (dispatch: AppDispatch) => {
  const messageData = {
    status_code: 200,
    success: true,
  };
  dispatch(SET_FAKE_STORE_DATA_LOADING(true));
  fetch("https://fakestoreapi.com/products").then((response) =>
    response
      .json()
      .then((data) => {
        dispatch(SET_FAKE_STORE_DATA_LOADING(false));
        dispatch(SET_FAKE_STORE_DATA_SUCCESS(data));
        dispatch(SET_FAKE_STORE_DATA_MESSAGE(messageData));
      })
      .catch((error) => {
        dispatch(SET_FAKE_STORE_DATA_LOADING(false));
        dispatch(SET_FAKE_STORE_DATA_ERROR(error));
      })
  );
};

export default FakeStoreAction;
