import React, { useEffect, createContext, useContext, useState, useRef } from "react";

import { IoCloseSharp } from "react-icons/io5"; // icona X per chiudere la sidebar
import { BsList } from "react-icons/bs" // Icona hamburger per aprire la sidebar

export const SidebarContext = createContext({
    isOpen: false,
    toggle: () => {}
})

// Definisco il bottone e la sua funzionalità
export const SidebarToggleButton = () => {
    const { isOpen, toggle } = useContext(SidebarContext);

    return (
      <button onClick={toggle} >
        {isOpen ? (
            <SidebarToggleIcon icon={<IoCloseSharp size="30" />} />
        ) : (
            <SidebarToggleIcon icon={<BsList size="30" />} />
        )}
      </button> 
    )
}
// Definisco l'icona del bottone
const SidebarToggleIcon = ({ icon }) => (
    <div className="topbar-icon fixed top-0 right-0">
        {icon}
    </div>
)

export const Sidebar = () => {
    // Funzioni per nuova versione
    const { isOpen, toggle } = useContext(SidebarContext);
    const ref = React.useRef(null);

    const handleToggle = () => {
        toggle();
        setIsOpen(!isOpen);
      };

    useEffect(() => {
        ref.current = document.querySelector(".sidebar");
    }, []);

    // Gestisco il click fuori dalla sidebar per chiuderla
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          toggle();
        }
    };

    useEffect(() => {
        if (isOpen) {
          document.addEventListener("click", handleClickOutside, false);
        }
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
    }, [isOpen]);
    
    return (
        <div ref={ref} className={`${isOpen ? "open" : "hidden"} sidebar`}>

            {/* Definisco il rettangolo che fa da sfondo per la sidebar e che ne cotiene i suoi elementi*/}
            <div id="sidebarContainer"> 
                <div className="text-gray-100 text-xl"> 
                    <div className="px-4 mt-4 flex"> 
                        {/*Titolo della sidebar*/}
                        <h1 className="font-bold text-gray-200"> Sidebar Demo </h1> 
                        {/* Bottone a X per chiudere la sidebar - da sostituire con la possibilità di animazione tra Hamburger a X e viceversa */}
                        <button
                            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                            aria-label="Close sidebar"
                            onClick={toggle}
                            >
                            {/*Icona X di chiusura della sidebar*/}
                            <IoCloseSharp className="h-10 w-7"/> 
                        </button>

                    </div>
                    {/*Linea orizzonatale per dividere l'area di titolo dall area app*/}
                    <hr className="my-4"></hr> 
                </div>

                {/* BOX PER RICERCA EMBRIONALE */}
                {/* <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
                                cursor-pointer bg-gray-700"></div>  */}
            </div> 

        </div>
    )
};