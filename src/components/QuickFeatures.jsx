import React from "react";
import ExploreButton from "./ExploreButton";

function QuickFeatures()
{
    return (
        <div className="quickFeatures">
            <div className="img-grid">
                <img src={require("../images/team1.png")} alt="" />
                <img src={require("../images/team2.png")} alt="" />
                <img src={require("../images/team3.png")} alt="" />
                <img src={require("../images/team4.png")} alt="" />
            </div>

            <div className="text-content">
                <h1><span id="text-1">Quick list</span> <span id="text-2">of Our</span><br /><span id="text-3">Features</span></h1>

                <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration in some form, by injected <br />humour, or randomised words which don't look even</p>

                <ExploreButton text="Explore more"/>
            </div>
        </div>
    );
}

export default QuickFeatures;