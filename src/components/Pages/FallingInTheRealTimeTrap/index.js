import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import { data, options } from "./aux";
import Page from "../Page";

export default function FallingInTheRealTimeTrap() {
    const title = "Falling in the real time trap";
    const content = (
        <>
            <p><b>Have you ever tried to build one of these graphs?</b></p>
            <div className="mt-10 mb-10">
                <Line data={data} options={options} />
            </div>
            <p><b>Well. This can be a big pain.</b></p>
            <br/>
            <p>You need to collect the data, send it to somewhere, aggregate the information if needed</p>
            <p>display it in a streaming fashion with good performance in multiple or single users at the same time the same information</p>
            <p>and all of this has to happen every a few seconds!</p>
            <p>Without talking about scalability, maintainability, and more.</p>
            <p>What a nightmare.</p>
            <p>It took me a long time to figure out which technologies are the more adapt it to this.</p>
            <p>And to be honest it has been a long ride.</p>
            <p>For creating this you can simply ping me out and I will show you how</p>
        </>
    );

    return (
        <Page
            title={title}
            content={content}
        />
    );
}