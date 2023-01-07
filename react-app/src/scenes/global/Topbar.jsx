import React from "react";
import { Logo, Hamburger } from "./assets/icons";

const SidebarToggleButton = ( {isSidebarOpen, setIsOpen} ) => {
    return (
        <button id="sidebarButtonData" className="sidebarToggleButton" 
                aria-controls="sidebar" aria-expanded="false"
                onClick={() => {
                    setIsOpen(!isSidebarOpen); 
                    const currentState = sidebarButtonData.getAttribute("data-state");
                    if (!currentState || currentState === "closed") {
                        sidebarButtonData.setAttribute("data-state", "opened");
                        sidebarButtonData.setAttribute("aria-expanded", "true");
                    } else {
                        sidebarButtonData.setAttribute("data-state", "closed");
                        sidebarButtonData.setAttribute("aria-expanded", "false");
                    }
                }}
        >
            <Hamburger /> {/* Icona hamburger per il menu in svg */}
        </button>
    )
};

export const Topbar = ( {isSidebarOpen, setIsOpen} ) => {
    return (
        <nav className="fixed flex items-center justify-between flex-wrap z-50 top-0 left-0 h-16 w-full m-0  bg-[#21184D] shadow-lg">
            <div className="flex flex-wrap items-center flex-shrink-0"> {/* Logo e titolo affianco */}
                <Logo /> {/* Logo del sito in svg */}
                <h1 className="website-title"> Demo Name </h1>
            </div>
            <SidebarToggleButton isSidebarOpen={isSidebarOpen} setIsOpen={setIsOpen}/>
        </nav>
    )
};