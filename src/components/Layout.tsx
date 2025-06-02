// import React from "react"; // Unused React import
import { 
  Box, 
  Drawer, 
  List, 
  ListItemButton,
  ListItemIcon, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  Typography, 
  CssBaseline 
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useLocation, Outlet } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <HomeIcon />, to: "/dashboard" },
  { text: "My Profile", icon: <AccountCircleIcon />, to: "/profile" },
  { text: "Previous ROI Entries", icon: <HistoryIcon />, to: "/history" },
  { text: "New ROI Entry", icon: <AddCircleOutlineIcon />, to: "/new-entry" },
];

export default function Layout() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ROI CRM Portal
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Permanent Left Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar /> {/* So content sits below the AppBar */}
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.to}
                selected={location.pathname === item.to}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar /> {/* spacer so content starts below AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
} 