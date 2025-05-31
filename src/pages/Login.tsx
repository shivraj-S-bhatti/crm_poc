import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Mock sign-in, navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ marginTop: 8, padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          ROI CRM Portal Login
        </Typography>
        <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSignIn(); }} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="wdCode"
            label="WD Code (Username)"
            name="wdCode"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 