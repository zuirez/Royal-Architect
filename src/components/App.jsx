import React from "react";
import Heading from "./Heading";
import LandingContent from "./LandingContent";
import QuickFeatures from "./QuickFeatures";
import AboutContent from "./AboutContent";
import FactContent from "./FactContent";
import SponsorsContent from "./SponsorsContent";
import Copyright from "./Copyright";

function App()
{
    return (
        <div>
            <div className="heroContainer">
                <Heading />
                <LandingContent />
            </div>

            <QuickFeatures />
            <AboutContent />
            <FactContent />
            <SponsorsContent />
            <Copyright />
        </div>
    );
}

export default App;