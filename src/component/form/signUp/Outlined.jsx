import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";

import InputField from "../../common/InputField";
import YupSchema from "../../../validation/YupSchema";
import MenuItems from "../../common/MenuItems";

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
    toast.success(" User Register SuccessFully");
    reset();
    console.log("Data:", data);
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
          {/* FirstName TextField */}
          <InputField
            name="firstName"
            label="FirstName"
            inputRef={register}
            error={Boolean(errors?.firstName)}
            helperText={errors?.firstName?.message}
          />
          {/* LastName TextField */}
          <InputField
            name="lastName"
            label="LastName"
            inputRef={register}
            error={Boolean(errors?.lastName)}
            helperText={errors?.lastName?.message}
          />
          {/* Email TextField */}
          <InputField
            name="email"
            label="Email"
            inputRef={register}
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
          {/* Phone TextField */}
          <InputField
            name="phone"
            label="Phone"
            inputRef={register}
            error={Boolean(errors?.phone)}
            helperText={errors?.phone?.message}
          />
          {/* City TextField */}
          <InputField
            name="city"
            label="City"
            inputRef={register}
            error={Boolean(errors?.city)}
            helperText={errors?.city?.message}
          />
          {/* PinCode TextField */}
          <InputField
            name="pinCode"
            label="PinCode"
            inputRef={register}
            error={Boolean(errors?.pinCode)}
            helperText={errors?.pinCode?.message}
          />
          {/* Gender TextField */}
          <FormControl
            fullWidth
            sx={{ mt: 2 }}
            size="small"
            color="success"
            focused
            error={Boolean(errors?.gender)}
          >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              name="gender"
              {...register("gender")}
              defaultValue={"DEFAULT"}
            >
              {MenuItems?.map((item, index) => (
                <MenuItem value={item ? item?.value : ""} key={index}>
                  {item ? item?.name : ""}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography component="p" variant="p" className="error-message">
            {errors?.gender?.message}
          </Typography>
          {/* UserName TextField */}
          <InputField
            name="userName"
            label="UserName"
            inputRef={register}
            error={Boolean(errors?.userName)}
            helperText={errors?.userName?.message}
          />
          {/* Password TextField */}
          <FormControl
            sx={{ width: "100%", mt: 2 }}
            variant="outlined"
            size="small"
            color="success"
            focused
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
          {/* ConfirmPassword TextField */}
          <InputField
            name="confirmPassword"
            label="ConfirmPassword"
            inputRef={register}
            error={Boolean(errors?.confirmPassword)}
            helperText={errors?.confirmPassword?.message}
          />
        </Typography>

        <Typography className="submit-btn" variant="div" component="div">
          <Button
            variant="contained"
            className="btn btn-sign"
            type="submit"
            color="success"
          >
            signUp
          </Button>
        </Typography>
      </Typography>
    </form>
  );
};

export default Outlined;
