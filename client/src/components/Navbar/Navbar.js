import React from "react";
import "./navbar.css";

function Navbar(props) {
    return (
        <nav>
            <div className="nav-wrapper light-green darken-4">
                <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><a href="/" className="title">GeoHunt</a></li>                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;