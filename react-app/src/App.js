import React from "react";

//import { themeSettings } from "./theme";
import { CssBaseline/*, ThemeProvider*/} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import MainPage from "./scenes/pages/mainPage";
import GraphsPage from "./scenes/pages/graphsPage";

function App() {
  return (
    <>
      <CssBaseline />

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
    </>
  );
}

export default App;
