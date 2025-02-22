import React from "react";
import ExploreButton from "./ExploreButton";

function LandingContent()
{
    return (
        <div className="landingContent">
            <h1>Brand New <br />Group of Architects</h1>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in <br />some form, by injected humour, or randomised words which don't look even</p>

            <ExploreButton text="Explore more" />

            <img src={require("../images/banner.png")} alt="" />
        </div>
    );
}

export default LandingContent;