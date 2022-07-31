import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const doitTheme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

export default doitTheme;
