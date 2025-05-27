import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleGoogleLogin = () => {
    alert('Google login not implemented');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Standard login not implemented');
  };
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{ marginBottom: 24 }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          label="Username"
          name="username"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          required
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </form>
      <Button
        onClick={handleGoogleLogin}
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          backgroundColor: '#174ea6',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#163e7a',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
        }}
      >
        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 8, background: 'white', borderRadius: '50%', padding: 4, width: 24, height: 24, color: '#4285F4' }} />
        Sign in with Google
      </Button>
      <hr style={{ width: '100%', margin: '24px 0' }} />
      <p>
        Don't have an account?{' '}
        <a href="/signup" style={{ color: '#1976d2' }}>Sign up</a>
      </p>
    </Box>
  );
};

export default SignIn;
