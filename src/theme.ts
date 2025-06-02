import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",   // MUI's default blue (matches the PDF's header)
    },
    secondary: {
      main: "#dc004e",   // You can tweak if needed, but PDF uses red accents for "ROI alert"
    },
    background: {
      default: "#fafafa", // light grey background behind cards
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8,  // 1 unit = 8px
});

export default theme; 