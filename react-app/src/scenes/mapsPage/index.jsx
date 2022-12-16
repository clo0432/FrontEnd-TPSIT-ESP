import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

import mappaAlberghetti from "./pianta alberghetti_piano terra.jpg"


const MapsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const coordinate = [34, 303, 546, 815];

    const imgWidth = Math.floor(0.8 * window.screen.width);
    const imgHeight = Math.floor(imgWidth / 1.43);

    const handleClick = (e) => {
        navigate(
            "../graphs"
        );
    }
    
    return (
        <>
            <h1>Maps Page</h1>
            <p>{location.state.scuola}</p>

            <img alt="Esempio di immagine con mappe" src={mappaAlberghetti}
                border="1" usemap="#aree" width={imgWidth} height={imgHeight} />
            <map name="aree" id="aree">
                <area shape="rect" coords={coordinate} onClick={handleClick} target="_blank" alt="Valle d'Aosta" />
            </map>
        </>
    );
}

export default MapsPage;