import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

const Standard = () => {
  //   Add Validation -- Use By React-Hook-Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Get signUser Data in localStorage
  const getSignInUser = JSON.parse(localStorage.getItem("sign-in") || "[]");

  //   FormSubmit Function
  const formSubmit = (data) => {
    toast.success("User Login SuccessFull");
    reset();
    console.log("data: ", data);
    if (getSignInUser.length > 0) {
      // Store The User Login Data In LocalStorage
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
  return (
    <form className="main-form mt-3" onSubmit={handleSubmit(formSubmit)}>
      <Typography className="inner-form-list p-3" component="div" variant="div">
        <Typography variant="p" component="p" className="form-title">
          Sign In
        </Typography>
        <TextField
          color="info"
          focused
          id="standard-basic"
          label="userName"
          variant="standard"
          size="small"
          sx={{ width: "100%", mt: 2 }}
          {...register("userName", {
            required: "required",
          })}
          name="userName"
          error={Boolean(errors?.userName)}
          helperText={errors?.userName?.message}
          inputProps={{ autoComplete: "off" }}
        />
        <FormControl
          sx={{ width: "100%", mt: 2 }}
          color="info"
          focused
          variant="standard"
          size="small"
          error={Boolean(errors?.password)}
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
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
            color="info"
            type="submit"
          >
            SignIn
          </Button>
        </Typography>
      </Typography>
    </form>
  );
};

export default Standard;
