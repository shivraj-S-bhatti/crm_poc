import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Box, Container, Toolbar } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` }, // Assuming Drawer width is 240px
          marginLeft: '240px', // Ensure main content is to the right of the permanent drawer
        }}
      >
        <Toolbar /> {/* This pushes content below the AppBar */}
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 