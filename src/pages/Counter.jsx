import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";

import { DECREMENT, INCREMENT, MULTIPLY } from "../redux/constant/actionType";

const Counter = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.counter.count);
  console.log("countState:", countState);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          textAlign="center"
          alignItems="center"
          marginTop="12px"
        >
          <Grid md={12} item>
            <Typography component="div" variant="div">
              <Typography component="p" variant="p">
                {countState}
              </Typography>
            </Typography>
          </Grid>
          <Grid md={12} item>
            <Typography component="div" variant="div" className="btn-main">
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch({ type: INCREMENT })}
                sx={{
                  margin: "12px",
                }}
              >
                Increment +
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch({ type: MULTIPLY })}
                sx={{
                  margin: "12px",
                }}
              >
                Multiply *
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch({ type: DECREMENT })}
                sx={{
                  margin: "12px",
                }}
              >
                Decrement -
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Counter;
