import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

import YupSchema from "../../validation/YupSchema";
import TextField from "../common/TextField";

const SignUp = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm("");
    toast.success("UserRegister SuccessFully");
    console.log("registerUser:", values);
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        pinCode: "",
        userName: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={YupSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography component="div" variant="div">
            <TextField name="firstName" type="text" placeholder="FirstName" />

            {errors.firstName && touched.firstName ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.firstName}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="lastName" type="text" placeholder="LastName" />
            {errors.lastName && touched.lastName ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.lastName}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="email" type="text" placeholder="Email" />
            {errors.email && touched.email ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.email}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="phone" type="text" placeholder="Phone" />
            {errors.phone && touched.phone ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.phone}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="city" type="text" placeholder="City" />

            {errors.city && touched.city ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.city}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="pinCode" type="text" placeholder="PinCode" />
            {errors.pinCode && touched.pinCode ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.pinCode}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="userName" type="text" placeholder="UserName" />
            {errors.userName && touched.userName ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.userName}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.password}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div">
            <TextField
              name="confirmPassword"
              type="text"
              placeholder="ConfirmPassword"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Typography
                component="div"
                variant="div"
                sx={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                * {errors.confirmPassword}
              </Typography>
            ) : null}
          </Typography>
          <Typography component="div" variant="div" className="text-center">
            <Button type="submit">SignUp</Button>
          </Typography>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
