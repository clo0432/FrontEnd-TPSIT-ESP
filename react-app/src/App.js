import React from "react";
import { themeSettings } from "./theme";

import MainPage from "./scenes/mainPage";
import { CssBaseline, ThemeProvider} from "@mui/material"

function App() {
  const theme = themeSettings();
  return (
    <>
      <CssBaseline />
      <MainPage />
    </>
  );
}

export default App;
