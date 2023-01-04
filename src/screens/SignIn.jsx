import React from "react";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import Filled from "../component/form/Filled";
import Outlined from "../component/form/Outlined";
import Standard from "../component/form/Standard";

const SignIn = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid md={4} sm={6} xs={12} item>
          <Outlined />
        </Grid>
        <Grid md={4} sm={6} xs={12} item>
          <Filled />
        </Grid>
        <Grid md={4} sm={6} xs={12} item>
          <Standard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
