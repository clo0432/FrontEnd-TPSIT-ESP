import React, { useEffect, useState } from "react";

export const Sidebar = ( {isSidebarOpen} ) => { 
    console.log(isSidebarOpen);   
    return (
        // Definisco il rettangolo che fa da sfondo per la sidebar e che ne cotiene i suoi elementi
        <div className={`${ isSidebarOpen ? "sidebarOpen": "sidebarClosed"} sidebar`}>
            <div className="text-gray-100 text-xl"> 
                {/*Titolo della sidebar*/}
                {/* <h1 className="px-4 mt-4 flex font-bold text-gray-200"> Sidebar Demo </h1>  */}
                {/*Linea orizzonatale per dividere l'area di titolo dall area app*/}
                <hr className="my-4"></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales diam vitae nibh facilisis gravida eget nec leo. 
                </p>
                
            </div>
        </div>
    )
};