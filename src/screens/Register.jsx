import React from "react";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import SignUp from "../component/form/SignUp";

const Register = () => {
  return (
    <Container>
      <Grid container spacing={2} className="register-content">
        <Grid md={4} sm={6} xs={12} item>
          <SignUp />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
