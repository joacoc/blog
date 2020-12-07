import React from "react";
import Page from "../Page";

export default function SensationTwoThousand() {
    const title = "2000's Sensation";
    const content = (
        <>
            <p>
                <img className="m-auto" src="twothousand.png" alt="twothousand"></img>
                <b>Have you ever had the sensation that 2000's were great and crazy years? </b><br/><br/>
                Well. I have it. I was a child at the time. And I call them the "2000's Sensation" <br/>
                I usually have this feeling of our present. Also in special occasions of my life. 
                That feeling that everything is alright.  <br/>
                That we are living in a very revolutionary and crazy moment. <br/>
                One that some child will remember in 20 years as the 2020's Sensation. <br/>
                There is also a song from Rels B called "Baladita 2000" that makes you feel at those times. <br/>
                Twenty years far seems to be a moment remembered with so much happiness, joy, and craziness.<br/>
                And maybe. Because of childhood. We have hopefulness and more.
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