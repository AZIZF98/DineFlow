import React, { useState } from 'react';
import Input from '../components/Input';
import { Box, Paper, Typography, Button } from '@mui/material';

const LoginPage = () => {
  const [login, setLogin] = useState({ loginInfo: { email: '', password: '' } });
  const [errors, setErrors] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = login.loginInfo;

    // Perform validation
    const hasError = !email || !email.includes('@') || !password;

    // Update state based on the validation result
    setErrors(hasError);

    // Act based on the validation result
    if (hasError) {
      console.log('Data tidak terkirim');
      return;
    }

    console.log('Data terkirim');
    console.log(login);
  };

  function handleLoginInfo(key, value) {
    setLogin((prevLogin) => ({
      ...prevLogin,
      loginInfo: {
        ...prevLogin.loginInfo,
        [key]: value,
      },
    }));

    // If there was an error, and the user is typing, hide the error message.
    if (errors) {
      setErrors(false);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFC15E', // Warm Yellow
      }}
    >
      <form onSubmit={handleLogin}>
        <Paper
          elevation={6}
          sx={{
            padding: '40px',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 4, color: '#D2691E', fontWeight: 'bold' }}>
            Login Karyawan
          </Typography>

          <Input label="email" onChangeName={handleLoginInfo} value={login.loginInfo.email} />

          <Input label="password" onChangeName={handleLoginInfo} value={login.loginInfo.password} type="password" />

          {errors ? <p style={{ color: 'red' }}>email atau password ada yang salah</p> : null}

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: '#D2691E', // Burnt Orange
              '&:hover': {
                backgroundColor: '#A0522D',
              },
              color: 'white',
              fontWeight: 'bold',
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              mt: 2,
            }}
            type="submit"
          >
            Login
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default LoginPage;
