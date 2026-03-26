import { TextField } from "@mui/material";

export default function Input({ label, value, type = "text", name, ...props }) {
  return (
    <TextField
      id="emailField"
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      value={value}
      sx={{ mb: 2 }}
      name={name}
      {...props}
    />
  );
}
