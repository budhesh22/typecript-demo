import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Outlined from "../component/form/signUp/Outlined";

const Register = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1 }}
        className="register-content"
      >
        <Grid md={6} sm={6} xs={12} item>
          <Outlined />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
