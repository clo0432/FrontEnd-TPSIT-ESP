import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

const Layout = () => {
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="background-main-page">
            {/* Pagina iniziale con titolo, breve descrizione e select */}
            <Topbar
                isSidebarOpen={isSideOpen}
                setIsSidebarOpen={setIsSideOpen}
                isSearchbarOpen={isSearchOpen}
                setIsSearchbarOpen={setIsSearchOpen}
            />{" "}
            {/* Topbar con bottone per sidebar, titolo, searchbar con animazione apple */}
            <div className="mainContent">
                <Sidebar
                    id="sidebar"
                    isSidebarOpen={isSideOpen}
                    setIsSideOpen={setIsSideOpen}
                />{" "}
                {/* Sidebar con: admin, login... */}
                <div
                    className={`${
                        isSideOpen ? "outletOpen" : "outletClosed"
                    } relative left-0`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
