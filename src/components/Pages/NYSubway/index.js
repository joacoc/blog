import React from "react";
import Page from "../Page";

export default function NYSubway() {
    const title = "NY Subway";
    const content = (
        <>
            <p>
                <b>The cleaner your product is the more your customer will maintain it like that.</b><br/><br/>

                <img className="m-auto" style={{ filter: "grayscale(100%)", maxHeight: "20rem" }} src="nysubway.png" alt="nysubway"/> <br/><br/>

                I would love to remember from which book I read a brief story about the NY's Subway trains that goes something like this:: <br/>
                <i>
                There was a time (near 1980) where New York was having struggle to maintain their subway trains clean and good looking.<br/>
                They noticed that when the train is clean and maintained people treat it with more care. Making it easier to maintain.<br/>
                And if the train were dirty and broken, people will treat it with less care. <br/>
                </i>
                In software happens the same. <br/>
                If your product is broken, looks bad and doesn't work as intended. <br/>
                Your customer will probably not report issues as much as if your product were in a good shape. <br/>
                Don't treat as less to those minor issues. <br/><br/>
                <i>They treat you in the same way that you introduce yourself. If you look bad, you will be mistreated; if you look good, you will be hired. - Mirtha Legrand</i>
                <br/><br/>
                Thanks Fede B. for lighting this.
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