import React from "react";
import { TextField } from "@mui/material";

const InputField = (props) => {
  // Destructuring
  const { name, label, error, helperText, inputRef } = props;
  return (
    <TextField
      id="outlined-basic"
      color="success"
      focused
      variant="outlined"
      size="small"
      sx={{ width: "100%", mt: 2 }}
      inputProps={{ autoComplete: "off" }}
      name={name}
      label={label}
      {...inputRef(name)}
      error={error}
      helperText={helperText}
    />
  );
};

export default InputField;
