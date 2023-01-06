import * as Yup from "yup";
const YupSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string()
    .required("required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Enter Valid Email Address"
    ),
  phone: Yup.string()
    .required("required")
    .matches(/^[6-9]\d{9}$/, "Enter Valid Number"),
  city: Yup.string().required("required"),
  pinCode: Yup.string()
    .required("required")
    .matches(/^[1-9]\d{5}$/, "Enter Valid Code"),
  userName: Yup.string().required("required"),
  password: Yup.string().required("required").min(6).max(14),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password Must Be Match"
  ),
});

export default YupSchema;
