import React from "react";

function SponsorsContent()
{
    return (
    <div className="sponsorsContent">
        <div className="sponsorsContentTitle">
            <h1>Our Sponsors</h1>
        </div>

        <div className="sponsorsContentText">
            <p>There are many variations of passages of Lorem Ipsum available, but <br />the majority have suffered alteration.</p>
        </div>

        <div className="sponsorsContentLogos">
            <img id="spcLogo" src={require("../images/sponsors/spotify.png")} alt="" />
            <img id="spcLogo" src={require("../images/sponsors/amazon.png")} alt="" />
            <img id="spcLogo" src={require("../images/sponsors/google.png")} alt="" />
            <img id="spcLogo" src={require("../images/sponsors/telerama.png")} alt="" />
            <img id="spcLogo" src={require("../images/sponsors/figma.png")} alt="" />
        </div>
    </div>
    );
}

export default SponsorsContent;