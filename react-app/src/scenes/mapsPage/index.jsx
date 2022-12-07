import { useLocation } from "react-router-dom";

const MapsPage = () => {
    const location = useLocation();

    console.log(location.state);
    
    return (
        <>
            <h1>Maps Page</h1>
            <p>{location.state.scuola}</p>
        </>
    );
}

export default MapsPage;