import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

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
          width: 360,
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // MUI uses theme.spacing for gap, so gap: 2 means 2 * theme.spacing (e.g. 16px)
        }}
      >
        <Typography variant="h5" align="center">
          ROI PORTAL
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="USER ID" variant="outlined" required fullWidth InputLabelProps={{ shrink: true }} />
          <TextField label="PASSWORD" type="password" variant="outlined" required fullWidth InputLabelProps={{ shrink: true }} />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            LOGIN
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login; 