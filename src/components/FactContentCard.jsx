import React from "react";

function FactContentCard(props)
{
    return (
    <div className="factContentCard">
        <div className="factContentCardIcon">
            <img src={props.icon} alt="" />
        </div>

        <div className="factContentCardText">
            <h1>{props.number}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    );
}

export default FactContentCard;