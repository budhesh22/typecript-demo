import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FAKE_STORE_ACTION_MAIN } from "../redux/constant/actionType";
import {
  FAKE_STORE_LOADING,
  FAKE_STORE_MESSAGE,
  FAKE_STORE_SUCCESS,
} from "../redux/reducers/FakeStoreSlice";

const Product = () => {
  const dispatch = useDispatch();
  // Product Fetch API Called when Page is Refresh
  useEffect(() => {
    dispatch({ type: FAKE_STORE_ACTION_MAIN });
  }, []);

  const isLoading = useSelector(FAKE_STORE_LOADING);
  const product = useSelector(FAKE_STORE_SUCCESS);
  const message = useSelector(FAKE_STORE_MESSAGE);

  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <h4 className="m-4">Loading Please Wait ...</h4>
        ) : (
          message.success &&
          product.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="product-list text-center">
                <h4>{product.category}</h4>
                <p>{product.description.slice(0, 40)}</p>
                
                <img
                  src={product.image}
                  alt="product-img"
                  width="50%"
                  height="40%"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
