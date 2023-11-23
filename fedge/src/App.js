import React from 'react';
import './App.css';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {AuthProvider} from "./hooks/useAuth";
import Main from "./components/layouts/main";
import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/Theme";
function App() {
    const user = JSON.parse(localStorage.getItem('signed-user'));
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
