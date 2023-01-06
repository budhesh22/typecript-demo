import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupSchema from "../../../validation/YupSchema";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const Outlined = () => {
  //   Add Validation -- Use By React-Hook-Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupSchema),
    mode: "onTouched",
  });
  // Get signUpUser Data in localStorage
  const getUserRegisterUser = JSON.parse(
    localStorage.getItem("sign-up") || "[]"
  );

  const formSubmit = (data) => {
    toast.success("User Register SuccessFully");
    reset();
    if (getUserRegisterUser.length > 0) {
      // Store The User Register Data In LocalStorage
      localStorage.setItem(
        "sign-up",
        JSON.stringify([...getUserRegisterUser, data])
      );
    } else {
      localStorage.setItem("sign-up", JSON.stringify([data]));
    }
  };

  // Password show/hide toggle Button
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form className="main-form mt-2" onSubmit={handleSubmit(formSubmit)}>
      <Typography className="inner-form-list p-3" component="div" variant="div">
        <Typography variant="p" component="p" className="form-title">
          Sign Up
        </Typography>

        <Typography className="form-field" variant="div" component="div">
          <TextField
            name="firstName"
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("firstName")}
            error={Boolean(errors?.firstName)}
            helperText={errors?.firstName?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <TextField
            name="lastName"
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("lastName")}
            error={Boolean(errors?.lastName)}
            helperText={errors?.lastName?.message}
            inputProps={{ autoComplete: "off" }}
          />

          <TextField
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("email")}
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <TextField
            name="phone"
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("phone")}
            error={Boolean(errors?.phone)}
            helperText={errors?.phone?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <TextField
            name="city"
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("city")}
            error={Boolean(errors?.city)}
            helperText={errors?.city?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <TextField
            name="pinCode"
            id="outlined-basic"
            label="PinCode"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("pinCode")}
            error={Boolean(errors?.pinCode)}
            helperText={errors?.pinCode?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <TextField
            name="userName"
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("userName")}
            error={Boolean(errors?.userName)}
            helperText={errors?.userName?.message}
            inputProps={{ autoComplete: "off" }}
          />
          <FormControl
            sx={{ width: "100%", mt: 2 }}
            variant="outlined"
            size="small"
            error={Boolean(errors?.password)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
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
              label="Password"
            />
          </FormControl>
          <Typography component="p" variant="p" className="error-message">
            {errors?.password?.message}
          </Typography>
          <TextField
            name="confirmPassword"
            id="outlined-basic"
            label="ConfirmPassword"
            variant="outlined"
            size="small"
            sx={{ width: "100%", mt: 2 }}
            {...register("confirmPassword")}
            error={Boolean(errors?.confirmPassword)}
            helperText={errors?.confirmPassword?.message}
            inputProps={{ autoComplete: "off" }}
          />
        </Typography>

        <Typography className="submit-btn" variant="div" component="div">
          <Button variant="contained" className="btn btn-sign" type="submit">
            signUp
          </Button>
        </Typography>
      </Typography>
    </form>
  );
};

export default Outlined;
