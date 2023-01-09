import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const Error = () => {
  const navigate = useNavigate();
  //   If User Enters A InValid URL/Path, Showed an Error Page and After 4 Second User Will automatically Navigate to the Home Page
  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, [4000]);
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        textAlign="center"
        alignItems="center"
        marginTop="12px"
      >
        <Grid md={12} item>
          <Typography className="error-main" component="div" variant="div">
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: "red",
                fontWeight: "1400",
              }}
            >
              This Page Not Found !
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Error;
