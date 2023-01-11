import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="background-main-page">
            {/* Pagina iniziale con titolo, breve descrizione e select */}
            <Topbar isSidebarOpen={isOpen} setIsOpen={setIsOpen} />{" "}
            {/* Topbar con bottone per sidebar, titolo, searchbar con animazione apple */}
            <div className="mainContent">
                <Sidebar
                    id="sidebar"
                    isSidebarOpen={isOpen}
                    setIsOpen={setIsOpen}
                />{" "}
                {/* Sidebar con: admin, login... */}
                <div
                    className={`${
                        isOpen ? "outletOpen" : "outletClosed"
                    } relative left-0`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
