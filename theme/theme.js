import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  overrides: {},
  palette: {
    error: {
      main: "#FF5757",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    white: {
      main: "#FFF",
    },
    text: {
      main: "#EB557A",
    },
  },
})

export default theme
