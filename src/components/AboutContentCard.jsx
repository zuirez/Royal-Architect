import React from "react";

function AboutContentCard(props)
{
    return (
        <div className="aboutContentCard">
            <h1>{props.heading}</h1>
            <p>"There are many variations of passages of   Lorem Ipsum available, <br />but the majority have suffered     alteration in some form, by <br />injected humour, or     randomised..........."</p>
        </div>
    );
}

export default AboutContentCard;