import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NEWS_DATA_REQUEST } from "../redux/constant/actionType";
import {
  //   NEWS_ERROR,
  NEWS_LOADING,
  //   NEWS_MESSAGE,
  NEWS_SUCCESS,
} from "../redux/reducers/NewsSlice";

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
    <div className="container">
      <div className="row">
        {isLoading ? (
          <h4>News Loading Please Wait ...</h4>
        ) : (
          result?.map((news, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="news-main"
                style={{
                  border: "2px solid black",
                  padding: "12px",
                }}
              >
                <h4>{news.source.name}</h4>
                <h5>title: {news.title.slice(0, 15)}</h5>
                <p>Author: {news.auther}</p>
                <p>content: {news.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
