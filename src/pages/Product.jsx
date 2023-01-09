import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Grid, Typography } from "@mui/material";

import { FAKE_STORE_ACTION_MAIN } from "../redux/constant/actionType";
import {
  FAKE_STORE_LOADING,
  FAKE_STORE_SUCCESS,
} from "../redux/reducers/FakeStoreSlice";
import { Container } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  // Product Fetch API Called when Page is Refresh
  useEffect(() => {
    dispatch({ type: FAKE_STORE_ACTION_MAIN });
  }, []);

  const isLoading = useSelector(FAKE_STORE_LOADING);
  const product = useSelector(FAKE_STORE_SUCCESS);

  return (
    <Container className="mt-4">
      <Grid
        container
        spacing={2}
        sx={{
          margin: "12px",
        }}
      >
        {isLoading ? (
          <Typography component="p" variant="p">
            Product Loading Please Wait
          </Typography>
        ) : (
          product?.map((product, index) => (
            <Grid md={4} sm={6} xs={12} item key={index}>
              <Typography component="div" variant="div" className="text-center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontWeight: "1200",
                  }}
                >
                  {product.category}
                </Typography>
                <Typography component="p" variant="p">
                  {product.description.slice(0, 40)}
                </Typography>
                <img
                  src={product.image}
                  alt="product-img"
                  width="50%"
                  height="40%"
                />
              </Typography>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Product;
