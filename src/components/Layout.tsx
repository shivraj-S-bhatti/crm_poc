import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Box, Container } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` } // Assuming NavBar width is 240px
        }}
      >
        {/* Placeholder for a Toolbar if needed, to prevent content from being hidden behind a top app bar */}
        {/* <Toolbar /> */}
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 