import React from "react";
import Page from "../Page";

export default function NewLaptop() {
    const title = "New Laptop";
    const content = (
        <>
            <p>
                <b>If you are a developer or planning to buy massive laptops for developers in the next decade think on this.</b><br/><br/>
                I have a 5 years old DELL Latitude e7450 that crashes compiling a medium size React project. <br/>
                8GB of RAM is obviously not enough for chrome and VS Code at the same time. <br/>
                A few years ago I tried <a className="no-underline hover:underline text-blue-500" href="https://www.repl.it">Repl.it</a> but it wasn't fulfilling as a primary coding environment.<br/>
                But the whole thing looked awesome. They have grown from 1 million (2018) to almost 5 million users in two years (ending-2020).<br/>
                Looking for options I received the Beta invite for <a className="" href="https://github.com/codespaces">CodeSpaces for GitHub.</a> <br/>
                Tried it out and had an out minded experience. <br/>
                Almost same UI/UX. <a className="no-underline hover:underline text-blue-500" href="https://arstechnica.com/information-technology/2015/04/microsofts-new-code-editor-is-built-on-googles-chromium/">(VS Code is based in Electron and Chromium)</a><br/>
                And without the hardware requirements for compiling.<br/>
                I can have any Github side-project running and flying in less than two minutes!<br/>
                By now is barely immature. But for sure this is the next step.<br/><br/>
                
                Anyways. M1 came out and I ended up buying it 😅. <br/>
                But the cheaper one since I'm considering all of this and taking a bet.<br/><br/>
                This whole webpage has been written using GitHub CodeSpaces. Microsoft development ecosystem is huge.<br/>
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