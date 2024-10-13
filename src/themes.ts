'use client'
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
       default: '#131826',
      //default: 'gray',
    },
  },
  typography: {
    fontFamily: '"Browallia New", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
