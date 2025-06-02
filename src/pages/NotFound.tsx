// import React from 'react'; // Unused React import
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8, p: 3 }}>
      <Typography variant="h3" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Sorry, the page you are looking for does not exist or may have been moved.
      </Typography>
      <Button component={RouterLink} to="/dashboard" variant="contained" color="primary">
        Go to Dashboard
      </Button>
    </Box>
  );
} 