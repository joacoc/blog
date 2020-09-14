import React from "react";
import Page from "../Page";

export default function BenjaminFranklinVirtues() {
    const title = "Benjamin Franklin Virtues";
    const content = (
        <>
            <p>
                <b>Have you ever read Benjamin Franklin authobiography?</b><br/><br/>
                It's a very easily readable and entertaining book about one of the United States founding fathers.<br/>
                In one of his chapters, he delights how virtues had been used to shape his formation.<br/>
                And to achieve this successfully he created the next table that I'm sharing with you in Notion.<br/><br/>
                <a className="no-underline hover:underline text-blue-500 text-lg" href='https://www.notion.so/Virtues-Benjamin-Franklin-439ce0a89eb745d5b25b9bae1e7b6b03'>
                    Link to notion
                </a><br/><br/>
            </p>
            <div>
                <img className="m-auto" src="franklinvirtuestable.png" alt="franklinvirtues"></img>
                <p className="text-xs">
                    Img source: <a className="no-underline hover:underline text-blue-500 text-xs" href="http://www.thirteenvirtues.com/">A webpage dedicated to this!</a> 
                </p>
            </div>
        </>
    );

    return (
        <Page
            title={title}
            content={content}
        />
    )
}