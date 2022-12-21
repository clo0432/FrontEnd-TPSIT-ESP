import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useEffect } from 'react';
import { useState } from "react";

import mappaAlberghetti from "./pianta alberghetti_piano terra.jpg"

const MapsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [startDimensions, setStartDimensions] = useState({ width: 0, height: 0 });
    const [ratio, SetRatio] = useState();
    const imageRef = useRef();

    let coordinate = [34, 303, 546, 815];

    const handleClick = (e) => {
        /*navigate(
            "../graphs"
        );*/
        console.log("click");
    }

    imgWidth = Math.floor(0.8 * window.screen.width);
    imgHeight = Math.floor(imgWidth / ratio);

    coordinate[0] = Math.floor(
        (coordinate[0] * imgWidth) / startDimensions.width
    );
    coordinate[1] = Math.floor(
        (coordinate[1] * imgHeight) / startDimensions.height
    );
    coordinate[2] = Math.floor(
        (coordinate[2] * imgWidth) / startDimensions.width
    );
    coordinate[3] = Math.floor(
        (coordinate[3] * imgHeight) / startDimensions.height
    );

    return (
        <>
            <h1>Maps Page</h1>
            <p>{location.state.scuola}</p>

            <img ref={imageRef} src={mappaAlberghetti} alt="Mappa dell'albergo" />
            <img alt="Esempio di immagine con mappe" src={mappaAlberghetti} useMap="#aree" width={imgWidth} height={imgHeight} />
            <map name="aree" id="aree">
                <area shape="rect" coords={coordinate} onClick={handleClick} target="_blank" alt="Valle d'Aosta" />
            </map>
        </>
    );
}

export default MapsPage;