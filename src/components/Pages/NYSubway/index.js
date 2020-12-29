import React from "react";

export default function NYSubway() {
    const title = "NY Subway";
    const content = (
        <>
            <p>
                <b>The cleaner the more your customer will maintain it like that.</b><br/><br/>
                <img className="m-auto" src="nysubway.png" alt="nysubway"/>

                I would love to remember from which book I read the next statement: <br/>
                There was a time where the New York subway train was having struggle to maintain their trains clean and good looking.<br/>
                They noticed that when the train is clean and maintained people treat it with more care. Making it easier to maintain.<br/>
                And if the train were dirty and broken, people will treat it with less care. <br/>
                In software happens the same. <br/>
                If your product is broken, looks bad and doesn't work as intended. <br/>
                Your customer will probably not report issues as much as if your product were in a good shape. <br/>
                Don't treat as less to those minor issues. <br/><br/>
                <i>They treat you in the same way that you introduce yourself. If you look bad, you will be mistreated; if you look good, you will be hired. - Mirtha Legrand</i>
                <br/><br/>
                Thanks @masterfrijolero for the inspiration on this one.
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