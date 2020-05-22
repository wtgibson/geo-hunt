import React from "react";
import "./jumbotron.css";

// Passing children elements

function Jumbotron(props) {
    return (
        <div className="container">
            <div className="row">
                <h1>React Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
        </div>
    );
};

export default Jumbotron;