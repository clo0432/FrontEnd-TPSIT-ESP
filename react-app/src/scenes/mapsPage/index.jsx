import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

import mappaAlberghetti from "./pianta alberghetti_piano terra.jpg"


const MapsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [coordinate, setCoordinate] = useState([34, 303, 546, 815]);
    
    const handleRegioni = (e) => {
        navigate(
            "../graphs"
        );
    }
    
    return (
        <>
            <h1>Maps Page</h1>
            <p>{location.state.scuola}</p>

            <img alt="Esempio di immagine con mappe" src={mappaAlberghetti}
                border="1" usemap="#aree" />
            <map name="aree" id="aree">
                <area shape="rect" coords={coordinate} bg-color="red" onClick={handleRegioni} target="_blank" alt="Valle d'Aosta" />
            </map>
        </>
    );
}

export default MapsPage;