import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from './theme.js';

import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import MainPage from "./scenes/mainPage";
import GraphsPage from "./scenes/graphsPage";

function App() {
  return (
    <ThemeProvider theme={ appTheme }>
      <CssBaseline />
      <div className="app" > 
        <main className="content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <> 
                  <Topbar />
                  <Sidebar />
                </>
              }>
                <Route index element={<MainPage />} />
                <Route path="graphs" element={<GraphsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
