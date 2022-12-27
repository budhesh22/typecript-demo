import React, { useEffect } from "react";

import { propsData } from "../interfaces/propsInterface";
import FakeStoreAction from "../redux/actions/FakeStoreAction";
import {
  FAKE_STORE_ERROR,
  FAKE_STORE_LOADING,
  FAKE_STORE_MESSAGE,
  FAKE_STORE_RESULT,
} from "../redux/reducers/FakeStoreSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const Home = (props: propsData) => {
  const { buy, discount } = props.propsData;

  const nameList: number | string = "hello string 20% discount";

  console.log("nameList:", nameList);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(FAKE_STORE_LOADING);
  const message = useAppSelector(FAKE_STORE_MESSAGE);
  const result = useAppSelector(FAKE_STORE_RESULT);
  const error = useAppSelector(FAKE_STORE_ERROR);

  console.log("isLoading: ", isLoading);
  console.log("message: ", message);
  console.log("result: ", result);
  console.log("error: ", error);

  useEffect(() => {
    dispatch(FakeStoreAction());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="offer-details">
            <h1 className="text-center m-2 text-success">
              Todays Offers &nbsp;
              <b>
                {buy} and {discount}
              </b>
            </h1>
          </div>
        </div>
        {isLoading ? (
          <div className="col-md-12">
            <h3>Loading ....</h3>
          </div>
        ) : (
          message.success &&
          result.map((product: any, index: number) => (
            <div className="col-md-4" key={index}>
              <div className="fake-store-data text-center p-5">
                <h6>{product.title}</h6>
                <img src={product.image} alt="product-img" width="50%" />
                <h5>{product.category}</h5>
                <h3>Price : {product.price} $</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
