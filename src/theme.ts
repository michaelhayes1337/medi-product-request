import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0094d4",
      dark: "#003d6f",
      light: "#84cbea",
    },
    secondary: {
      main: "#E5A826",
    },
    background: {
      default: "#F7F6F5",
    },
    text: {
      secondary: "#E5A826",
      disabled: "#212121",
    },
    warning: {
      main: "#ffc226",
    },
    info: {
      main: "#0094d4",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Roboto",
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
  },
});

// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
export default responsiveFontSizes(theme);
