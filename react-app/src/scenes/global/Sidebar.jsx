import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="graphs">Grafici</Link>
                </li>
                <li>
                    <Link to="/">MainPage</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
};

export default Sidebar;