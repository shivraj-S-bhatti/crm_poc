import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Link } from '@mui/material';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default', // This will come from the theme
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img 
            src="/itc-logo.png" 
            alt="ITC Enduring Values" 
            style={{ width: '200px', height: 'auto' }}
          />
        </Box>

        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          ROI PORTAL
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField 
            label="USER ID" 
            variant="outlined" 
            required 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
          />
          <TextField 
            label="PASSWORD" 
            type="password" 
            variant="outlined" 
            required 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ mt: 1 }}
          >
            LOGIN
          </Button>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              // Handle forgot password
            }}
            sx={{ 
              textAlign: 'center', 
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            Forgot Password?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login; 