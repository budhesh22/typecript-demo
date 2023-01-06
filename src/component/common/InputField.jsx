import { TextField } from "@mui/material";
import React from "react";

const InputField = (props) => {
  const { name, label, error, helperText } = props;
  console.log("props: ", props);
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      size="small"
      sx={{ width: "100%", mt: 2 }}
      inputProps={{ autoComplete: "off" }}
      name={name}
      label={label}
      error={error}
      helperText={helperText}
    />
  );
};

export default InputField;
