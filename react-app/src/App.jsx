import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./scenes/global/Layout";
import MainPage from "./scenes/mainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    {/* <Route path="team" element={<Team />} /> */}
                    {/* <Route path="projects" element={<Projects />} /> */}
                    {/* <Route path="reports" element={<Reports />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
