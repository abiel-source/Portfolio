import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#0b0b0b",
    },
    text: {
      primary: "rgba(255,255,255,0.92)",
      secondary: "rgba(255,255,255,0.68)",
    },
  },
  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    h1: {
      fontWeight: 400,
      // letterSpacing: "-0.03em",
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 350,
      // letterSpacing: "-0.025em",
      letterSpacing: "-0.012em",
      lineHeight: 1.08,
    },
    h3: {
      fontWeight: 300,
      letterSpacing: "-0.02em",
      letterSpacing: "-0.02em",
    },
  },

});
