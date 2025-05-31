import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box>
        <Typography variant="h1" component="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Button component={RouterLink} to="/dashboard" variant="contained" sx={{ mt: 3 }}>
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound; 