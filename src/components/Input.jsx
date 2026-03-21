import { TextField } from "@mui/material";

export default function Input({ label, value, type = "text", onChangeName }) {
  return (
    <TextField
      id="emailField"
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChangeName}
      sx={{ mb: 2 }}
    />
  );
}
