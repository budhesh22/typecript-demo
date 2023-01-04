import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import img from "../assets/images/img.jpg";

const Mui = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Grid Demo */}
      <Grid
        container
        spacing={2}
        textAlign="center"
        alignItems="center"
        marginTop="12px"
      >
        <Grid item md={4} sm={6} xs={12}>
          <Typography className="grid-first-item" variant="div" component="div">
            <h3 className="item-heading">
              First-Grid
              <img src={img} alt="home-img" width="100%" />
            </h3>
          </Typography>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography
            className="grid-second-item"
            variant="div"
            component="div"
          >
            <h3 className="item-heading">
              Second-Grid <img src={img} alt="home-img" width="100%" />
            </h3>
          </Typography>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography variant="div" className="grid-third-item" component="div">
            <h3 className="item-heading">
              Third-Grid <img src={img} alt="home-img" width="100%" />
            </h3>
          </Typography>
        </Grid>
      </Grid>
      {/* Stack Demo */}
      <Stack spacing={2} textAlign="center" justifyContent="center">
        <Typography className="main-stack-item" component="div" variant="div">
          <h3 className="stack-item">First-Stack</h3>
          <h3 className="stack-item">Second-Stack</h3>
          <h3 className="stack-item">Third-Stack</h3>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Mui;
