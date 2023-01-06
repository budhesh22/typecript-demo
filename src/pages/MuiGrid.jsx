import React from "react";

import { Box } from "@mui/system";
import { Avatar, Grid, Typography } from "@mui/material";

import img from "../assets/images/img.jpg";

const MuiGrid = () => {
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
            <h3 className="item-heading">First-Grid</h3>
            <Typography
              component="div"
              variant="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Avatar src={img} alt="home-img" width="100%" />
            </Typography>
          </Typography>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography
            className="grid-second-item"
            variant="div"
            component="div"
          >
            <h3 className="item-heading">Second-Grid</h3>
            <Typography
              component="div"
              variant="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Avatar src={img} alt="home-img" width="100%" />
            </Typography>
          </Typography>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography variant="div" className="grid-third-item" component="div">
            <h3 className="item-heading">Third-Grid</h3>
            <Typography
              component="div"
              variant="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Avatar src={img} alt="home-img" width="100%" />
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiGrid;
