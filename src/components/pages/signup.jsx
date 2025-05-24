import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleGoogleSignup = () => {
    alert('Google signup not implemented');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Standard signup not implemented');
  };
  return (
    <Box sx={{
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
    }}>
      <Typography variant="h4" sx={{ color: '#222', mb: 2 }}>Sign Up</Typography>
      <Button
        onClick={handleGoogleSignup}
        variant="contained"
        fullWidth
        sx={{
          mb: 2,
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
        Sign up with Google
      </Button>
      <hr style={{ width: '100%', margin: '24px 0', borderColor: '#eee' }} />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div>
          <label style={{ color: 'black' }}>Username:</label>
          <input type="text" name="username" required style={{ width: '100%', boxSizing: 'border-box', padding: '8px', border: '1px solid #ccc', borderRadius: 4, marginBottom: 12 }} />
        </div>
        <div>
          <label style={{ color: 'black' }}>Email:</label>
          <input type="email" name="email" required style={{ width: '100%', boxSizing: 'border-box', padding: '8px', border: '1px solid #ccc', borderRadius: 4, marginBottom: 12 }} />
        </div>
        <div style={{ position: 'relative' }}>
          <label style={{ color: 'black' }}>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            style={{ width: '100%', boxSizing: 'border-box', padding: '8px', border: '1px solid #ccc', borderRadius: 4, marginBottom: 12 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ position: 'absolute', right: 8, top: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#1976d2' }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
      </form>
      <p style={{ color: '#222', marginTop: 16 }}>Already have an account? <a href="/auth/login" style={{ color: '#1976d2' }}>Sign In</a></p>
    </Box>
  );
};

export default Signup;