import React, { useEffect, useState } from "react";
import { Hamburger, Logo } from "./assets/icons";

const SidebarToggleButton = ({ isSidebarOpen, setIsOpen }) => {
    return (
        <button
            id="sidebarButtonData"
            className="sidebarToggleButton"
            aria-controls="sidebar"
            aria-expanded="false"
            onClick={() => {
                setIsOpen(!isSidebarOpen);
                const currentState =
                    sidebarButtonData.getAttribute("data-state");
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
    );
};

export const Topbar = ({ isSidebarOpen, setIsOpen }) => {
    useEffect(() => {
        const handleScroll = () => {
            var element = document.getElementById("topbar");
            if (window.scrollY > 0) {
                element.classList.add("background-topbar");
            } else {
                element.classList.remove("background-topbar");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="topbar" className="topbar">
            <div className="flex flex-wrap items-center flex-shrink-0">
                {/* Logo e titolo affianco */}
                <a href="/">
                    <Logo />
                </a>
                {/* Logo del sito in svg */}
                <h1 className="website-title"> Air quality </h1>
            </div>
            <SidebarToggleButton
                isSidebarOpen={isSidebarOpen}
                setIsOpen={setIsOpen}
            />
        </nav>
    );
};
