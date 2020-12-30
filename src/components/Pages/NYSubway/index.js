import React from "react";
import Page from "../Page";

export default function NYSubway() {
    const title = "NY Subway";
    const content = (
        <>
            <p>
                <b>The cleaner your product is the more your customer will maintain it like that.</b><br/><br/>

                <img className="m-auto" style={{ filter: "grayscale(100%)", maxHeight: "20rem" }} src="nysubway.png" alt="nysubway"/> <br/><br/>

                I would love to remember from which book I read a brief story about the NY's Subway trains that goes something like this: <br/><br/>
                <i className="font-light">
                There was a time (near 1980) where the New York City Subway was struggling to maintain their trains clean and good looking.<br/>
                After a time they noticed that when the train is clean and in good shape people would treat it with more care. Making it easier to maintain.<br/>
                And if the train was dirty and broken, people will treat it with less care.
                </i><br/><br/>
                In software happens the same. <br/>
                If your product is broken, looks bad and doesn't work as intended. <br/>
                Your customer will probably not report issues or bugs as much as if your product were in a good shape. <br/>
                Try to keep accountable those minor details. <br/><br/>
            </p>
            <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
                <div class="relative text-lg font-medium md:flex-grow">
                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <i className="font-light relative">They treat you in the same way that you introduce yourself. If you look bad, you will be mistreated; if you look good, you will be hired. - Mirtha Legrand</i>
                    <br/><br/>
                </div>
            </blockquote>
            <p>
                Thanks for Fede B.
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