import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Standard = () => {
  // Password show/hide toggle Button
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form className="main-form mt-3">
      <Typography className="inner-form-list p-3" component="div" variant="div">
        <Typography variant="p" component="p" className="form-title">
          Sign In
        </Typography>
        <TextField
          id="standard-basic"
          label="userName or Email"
          variant="standard"
          size="small"
          sx={{ width: "100%", mt: 2 }}
        />
        <FormControl
          sx={{ width: "100%", mt: 2 }}
          variant="standard"
          size="small"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography className="submit-btn" variant="div" component="div">
          <Button variant="contained" className="btn btn-sign" color="warning">
            SignIn
          </Button>
          <Button variant="outlined" className="btn btn-sign">
            Forgot
          </Button>
        </Typography>
      </Typography>
    </form>
  );
};

export default Standard;
