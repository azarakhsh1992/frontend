import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {AuthProvider} from "./hooks/useAuth";
import Main from "./layouts/main";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme/Theme";
function App() {
  const user = JSON.parse(localStorage.getItem('signed-user'));
  // const theme = createTheme();
  return (
      <ThemeProvider theme={theme}>
        <AuthProvider user={user}>
          <SnackbarProvider maxSnack={3}>
            <Router>
              <Main/>
            </Router>
          </SnackbarProvider>
        </AuthProvider>
      </ThemeProvider>
  );
}

export default App;
