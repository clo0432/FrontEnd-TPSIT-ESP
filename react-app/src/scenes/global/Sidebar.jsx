import React from "react";
import {
    FcConferenceCall,
    FcHome,
    FcOpenedFolder,
    FcSettings,
    FcSurvey,
} from "react-icons/fc";

export const Sidebar = ({ isSidebarOpen }) => {
    return (
        // Definisco il rettangolo che fa da sfondo per la sidebar e che ne cotiene i suoi elementi
        <div
            className={`${
                isSidebarOpen ? "sidebarOpen" : "sidebarClosed"
            } sidebar`}
        >
            {/*Elementi della sidebar*/}
            <nav className="sidebarNav">
                {" "}
                {/* Sample degli elementi della topbar */}
                <a href="#" className="sidebarButtons">
                    <FcHome size={25} />
                    <span>home</span>
                </a>
                <a href="#" className="sidebarButtons">
                    <FcConferenceCall size={25} />
                    <span>team</span>
                </a>
                <a href="#" className="sidebarButtons">
                    <FcOpenedFolder size={25} />
                    <span>projects</span>
                </a>
                <a href="#" className="sidebarButtons">
                    <FcSurvey size={25} />
                    <span>reports</span>
                </a>
                <a href="#" className="sidebarButtons">
                    <FcSettings size={25} />
                    <span>settings</span>
                </a>
            </nav>
        </div>
    );
};
