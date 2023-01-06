import React from "react";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import Filled from "../component/form/signIn/Filled";
import Outlined from "../component/form/signIn/Outlined";
import Standard from "../component/form/signIn/Standard";

const Login = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid md={4} sm={6} xs={12} item>
          <Filled />
        </Grid>
        <Grid md={4} sm={6} xs={12} item>
          <Outlined />
        </Grid>
        <Grid md={4} sm={6} xs={12} item>
          <Standard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
