import { createTheme } from "@mui/material/styles";

export const globalTheme = createTheme({
  palette: {
    primary: {
      linear: "linear-gradient(10deg,#000,#163A0D )",
      main: "#163A0D",
      light: "#2F653C",
    },
    secondary: {
      light: "#768948",
      main: "#61803B",
      contrastText: "#B69836",
    },
    cream: {
      light: "#FFED8F",
      main: "#F5B85B",
      dark: "#D19335",
    },
    red: {
      main: "#B01D1D",
      linear: "linear-gradient(to right,#B01D1D,#9e2222 )",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "IranNastaliq",
      "IranSansWeb",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [0, 4, 8, 16, 32, 64],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
