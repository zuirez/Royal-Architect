import React from "react";
import AboutContentCard from "./AboutContentCard";

function AboutContent()
{
    return (
    <div>
        <div className="aboutContent">
            <div className="aboutContentLeft">
                <div className="aboutContentText">
                    <div>
                        <button></button>
                    </div>

                    <div className="aboutContentTextContent">
                        <h1>Features you will love & enjoy</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the <br />majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even</p>
                    </div>
                </div>

                <div className="aboutContentCards">
                    <AboutContentCard
                        heading="Desktop & Mobile Version"
                    />

                    <AboutContentCard
                        heading="Drag & Drop Builder"
                    />

                    <AboutContentCard
                        heading="Awesome Modern Design"
                    />

                    <AboutContentCard
                        heading="Super Easy to Edit"
                    />
                </div>
            </div>

            <div className="aboutContentRight">
                <img src={require("../images/architect.png")} alt="" />
            </div>
        </div>
        
        <div id="card">
            <h1>10+ Year</h1>
            <p>Experience</p>
        </div>
    
    </div>
    );
}

export default AboutContent;