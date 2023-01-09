import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { NEWS_DATA_REQUEST } from "../redux/constant/actionType";
import {
  //   NEWS_ERROR,
  NEWS_LOADING,
  //   NEWS_MESSAGE,
  NEWS_SUCCESS,
} from "../redux/reducers/NewsSlice";
import { Container } from "react-bootstrap";

const News = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(NEWS_LOADING);
  const result = useSelector(NEWS_SUCCESS);
  //   const message = useSelector(NEWS_MESSAGE);
  //   const error = useSelector(NEWS_ERROR);

  useEffect(() => {
    dispatch({ type: NEWS_DATA_REQUEST });
  }, []);
  return (
    <Container className="mt-4">
      <Grid container spacing={2}>
        {isLoading ? (
          <h4>News Loading Please Wait ...</h4>
        ) : (
          result?.map((news, index) => (
            <Grid md={6} sm={12} className="col-md-6" key={index}>
              <Typography
                className="news-main m-2"
                component="div"
                variant="div"
              >
                <Typography
                  component="h4"
                  variant="h4"
                  sx={{
                    padding: "4px",
                  }}
                >
                  {news.source.name}
                </Typography>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    padding: "4px",
                  }}
                >
                  title: {news.title.slice(0, 15)}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    padding: "4px",
                  }}
                >
                  Author: {news.auther}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    padding: "4px",
                  }}
                >
                  content: {news.content}
                </Typography>
              </Typography>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default News;
