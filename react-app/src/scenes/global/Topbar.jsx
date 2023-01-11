import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Hamburger, Logo } from "./assets/icons";

const SidebarToggleButton = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <button
            id="sidebarButtonData"
            className="sidebarToggleButton"
            aria-controls="sidebar"
            aria-expanded="false"
            onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
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

const SearchbarToggleButton = ({ isSearchbarOpen, setIsSearchbarOpen }) => {
    const handleSearchClick = () => {
        console.log("Click!");
    };

    return (
        <button className="searchbarToggleButton" onClick={handleSearchClick}>
            <FcSearch size={20} />
        </button>
    );
};

export const Topbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    isSearchbarOpen,
    setIsSearchbarOpen,
}) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${isSticky ? "sticky" : "fixed"}  topbar`}>
            <div className="flex flex-wrap items-center flex-shrink-0">
                {" "}
                {/* Logo e titolo affianco */}
                <Logo /> {/* Logo del sito in svg */}
                <h1 className="website-title"> Demo Name </h1>
            </div>
            <div className="space-x-[100px]">
                <SearchbarToggleButton
                    isSearchbarOpen={isSearchbarOpen}
                    setIsSearchbarOpen={setIsSearchbarOpen}
                />
                <SidebarToggleButton
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
            </div>
        </nav>
    );
};
