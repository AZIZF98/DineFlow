import { TextField } from '@mui/material';

export default function Input({ label, value, type = 'text', onChangeName }) {

    function handleChange(event){
        onChangeName(label, event.target.value);
    }

    return(
        <TextField
            id='emailField'
            label={label}
            type={type}
            variant="outlined"
            fullWidth
            value={value}
            onChange={handleChange}
            sx={{ mb: 2 }}
        />
    );
}
