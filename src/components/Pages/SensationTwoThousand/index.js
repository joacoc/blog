import React from "react";
import Page from "../Page";

export default function SensationTwoThousand() {
    const title = "2000's Sensation";
    const content = (
        <>
            <p>
                <b>Have you ever had the sensation that 2000's were great and crazy years? </b><br/>
                Well. I have it. And I call them the "2000's Sensation" <br/>
                I ussualy have this feeling of our present. That everything is alright <br/>
                That we are living in a very revolutionary and crazy moment <br/>
                One that will be remembered in 20 years as the 2020's Sensation. <br/>
                There is also a song from Rels B called "Baladita 2000" <br/>
                Twenty years far seems to be a moment to be remembered with happines <br/>
                And maybe. Because of our childhood. 
            </p>
        </>
    )
    return (
        <Page
            title={title}
            content={content}
        />
    )
}