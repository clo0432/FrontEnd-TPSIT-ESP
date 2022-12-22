import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import mappaAlberghetti from "./pianta alberghetti_piano terra.jpg"

const MapsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [isLoaded, setIsLoaded] = useState(false);
    
    let coordinate = [34, 303, 546, 815];

    const onImageLoad = ({target:img}) => {
        const startDimensions = {
            width: img.offsetWidth, 
            height: img.offsetHeight 
        };
        const ratio = startDimensions.width / startDimensions.height;

        const imgWidth = Math.floor(0.8 * window.screen.width);
        const imgHeight = Math.floor(imgWidth / ratio);

        img.setAttribute('width', imgWidth);
        img.setAttribute('height', imgHeight);

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

        setIsLoaded(true);
    };

    const handleClick = (e) => {
        /*navigate(
            "../graphs"
        );*/
        console.log("click");
    };

    return (
        <>
            <h1>Maps Page</h1>
            <p>{location.state.scuola}</p>
            
            <img alt="Esempio di immagine con mappe" onLoad={onImageLoad} src={mappaAlberghetti} useMap="#aree" style={isLoaded ? { display: 'block' } : { display: 'none'}} />
            <map name="aree" id="aree">
                <area shape="rect" coords={coordinate} onClick={handleClick} alt="area" />
            </map>
        </>
    );
}

export default MapsPage;