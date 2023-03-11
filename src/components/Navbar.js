import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar__text">
                <ul className="navbar__ul">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/new"}>New Songs</Link>
                    </li>
                    <li>
                        <Link to={"/About"}>About</Link>
                    </li>
                </ul>
        </div>
    </nav>
    );
};

export default Navbar;