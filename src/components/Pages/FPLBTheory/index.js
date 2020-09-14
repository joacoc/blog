import React from "react";
import Page from "../Page";

export default function FPLBTheory() {
    const title = "FPLB Theory";
    const content = (
        <>
            <p>
                A few days ago a coworker (@masterfrijolero) was in the middle of a teaching <br/>
                and when their learners asked what is needed to get into a programming job <br/>
                a wild spark lightened upon his mind.<br/>
                Time after this, he remembers the fact and mentioned his illumination to me as the syllabus "FPLB".<br/>
                Then he developed it more and it stands for this::<br/>
                <b>F</b>ramework (React, Flink, Rails..)<br/>
                <b>P</b>lataform (Mobile, web, consoles..)<br/>
                <b>L</b>anguage (Java, Python, R..)<br/>
                <b>B</b>usiness Rules<br/>
                These are four potential keys you want to know when landing for a job.<br/>
                If you have at least two of them you will have a good potential<br/>
                the more the better<br/>
                the less the harder.<br/>
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