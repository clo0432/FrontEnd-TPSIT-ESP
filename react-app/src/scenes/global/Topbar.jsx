import React from "react";

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
                }
        }>
            <svg className="hamburger" viewBox="0 0 100 100" width="35" >
                <rect className="line top" 
                      width="70" height="7"
                      x="14" y="27.5" rx="5">
                </rect>
                <rect className="line middle" 
                      width="70" height="7"
                      x="14" y="47.5" rx="5">
                </rect>
                <rect className="line bottom" 
                      width="70" height="7"
                      x="14" y="67.5" rx="5">
                </rect>
            </svg>
        </button>
    )
};

export const Topbar = ( {isSidebarOpen, setIsOpen} ) => {
    return (
        <div className="z-50 fixed top-0 left-0 h-16 w-full m-0 flex-row bg-[#21184D] shadow-lg ">
            <SidebarToggleButton isSidebarOpen={isSidebarOpen} setIsOpen={setIsOpen}/>
        </div>
    )
};