import React from "react";
import FactContentCard from "./FactContentCard";

function FactContent()
{
    return (
    <div className="factContent">
        <div className="factContentTop">
            <h1>Some Facts</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but <br />the majority have suffered alteration.</p>
        </div>

        <div className="factContentBottom">
            <FactContentCard 
                icon={require("../images/icons/ribon.png")}
                number="54"
                text="Awards Winnings"
            />

            <FactContentCard 
                icon={require("../images/icons/projects.png")}
                number="1458"
                text="Projects Finished"
            />

            <FactContentCard 
                icon={require("../images/icons/customers.png")}
                number="590"
                text="Clients Worked"
            />

            <FactContentCard 
                icon={require("../images/icons/email.png")}
                number="22578"
                text="Email Send"
            />
        </div>
    </div>
    );
}

export default FactContent;