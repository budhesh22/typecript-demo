import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Filled = () => {
  //   Add Validation -- Use By React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Get signUser Data in localStorage
  const getSignInUser = JSON.parse(localStorage.getItem("sign-in") || "[]");

  //   FormSubmit Function
  const formSubmit = (data) => {
    toast.success("User Login SuccessFull");
    console.log("data: ", data);
    if (getSignInUser.length > 0) {
      localStorage.setItem("sign-in", JSON.stringify([...getSignInUser, data]));
    } else {
      localStorage.setItem("sign-in", JSON.stringify([data]));
    }
  };

  // Password show/hide toggle Button
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   console.log(getValues(), "Value");

  return (
    <form className="main-form mt-3" onSubmit={handleSubmit(formSubmit)}>
      <Typography className="inner-form-list p-3" component="div" variant="div">
        <Typography variant="p" component="p" className="form-title">
          Sign In
        </Typography>
        <TextField
          id="filled-basic"
          {...register("userName", { required: "required", maxLength: 20 })}
          label="userName or Email"
          variant="filled"
          size="small"
          name="userName"
          error={Boolean(errors?.userName)}
          helperText={errors?.userName?.message}
          inputProps={{ autoComplete: "off" }}
          sx={{ width: "100%", mt: 2 }}
        />
        <FormControl
          sx={{ width: "100%", mt: 2 }}
          variant="filled"
          size="small"
          error={Boolean(errors?.password)}
        >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "required",
              minLength: {
                value: 6,
                message: "Password Must Be > 6 ",
              },
              maxLength: {
                value: 14,
                message: "Password Must Be < 14",
              },
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography component="p" variant="p" className="error-message">
          {errors?.password?.message}
        </Typography>
        <Typography className="submit-btn" variant="div" component="div">
          <Button
            variant="contained"
            className="btn btn-sign"
            type="submit"
            color="success"
          >
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

export default Filled;
