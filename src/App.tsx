import { useState } from 'react'

import { Routes, Route , useParams} from "react-router-dom";

import Home from './pages/home/Home';
import List from './pages/list/List';
import UserRouter from './pages/user/UserRouter';
import AuthProvider from './context/AuthProvider';
import ListOutlet from './layouts/ListOutlet';


import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from './theme/theme';


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ListOutlet />}>
              <Route path="/list/:listId" element={<List />} />
              <Route path="/user/:listId/:username" element={<UserRouter />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App
