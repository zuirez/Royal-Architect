import React from "react";

function Heading()
{
    return (
        <div className="heading">
            <div className="logo">
                <h1>Royal Architects</h1>
            </div>

            <div className="navBar">
                <button id="navIcon">Home</button>
                <button id="navIcon">About</button>
                <button id="navIcon">Contact Us</button>
                <button id="navIcon">Login</button>
            </div>
        </div>
    )
}

export default Heading;