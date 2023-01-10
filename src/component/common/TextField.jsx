import React from "react";
import { Field } from "formik";

const TextField = (props) => {
  const { name, type, placeholder } = props;
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        margin: "8px",
        padding: "3px",
        border: "2px solid #bda8a8",
        borderRadius: "8px",
        textAlign: "center",
      }}
    />
  );
};

export default TextField;
