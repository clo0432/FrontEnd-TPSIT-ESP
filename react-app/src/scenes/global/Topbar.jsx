import React, { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5"; // icona X per chiudere la sidebar
import { BsList } from "react-icons/bs" // Icona hamburger per aprire la sidebar

// Definisco il bottone e la sua funzionalità
const SidebarToggleButton = ( {isSidebarOpen, setIsOpen} ) => {
    return (
      <button onClick={() => {setIsOpen(!isSidebarOpen)}}>
            {isSidebarOpen ? (
                <SidebarToggleIcon icon={<IoCloseSharp size="30" />} />
            ) : (
                <SidebarToggleIcon icon={<BsList size="30" />} />
            )}
      </button> 
    )
};

// Definisco l'icona dei bottoni
const SidebarToggleIcon = ({ icon }) => (
    <div className="topbar-icon fixed top-0 right-0">
        {icon}
    </div>
)

export const Topbar = ( {isSidebarOpen, setIsOpen} ) => {
    return (
        <div className="z-50 fixed top-0 left-0 h-16 w-full m-0 flex-row bg-[#21184D] shadow-lg ">
            <SidebarToggleButton isSidebarOpen={isSidebarOpen} setIsOpen={setIsOpen}/>
        </div>
    )
};