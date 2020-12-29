import React from "react";
import Page from "../Page";

export default function NewLaptop() {
    const title = "New Laptop";
    const content = (
        <>
            <p>
                <b>If you are a developer or planning to buy massive laptops for developers in the next decade think on this.</b><br/><br/>
                I have a 5 years old DELL Latitude that crashes compiling a medium size React project. <br/>
                8GB of RAM is not enough for chrome and VS Code at the same time. <br/> <br/>
                A few years ago I tried <a className="no-underline hover:underline text-blue-500" href="https://www.repl.it">Repl.it</a> but it wasn't fulfilling as a primary coding environment.<br/>
                As the founder said: <a className="no-underline hover:underline text-blue-500" href="https://amasad.me/replit_ide">Repl.it is not an IDE</a><br/> 
                But the whole thing looked awesome. They have grown from 1 million (2018) to almost 5 million users in two years (ending-2020).<br/><br/>
                Looking for options I received the Beta invite for <a className="no-underline hover:underline text-blue-500" href="https://github.com/features/codespaces">CodeSpaces for GitHub.</a> <br/>
                Tried it out and had an out minded experience. <br/>
                Almost same UI/UX as local Visual Studio Code. <a className="no-underline hover:underline text-blue-500" href="https://arstechnica.com/information-technology/2015/04/microsofts-new-code-editor-is-built-on-googles-chromium/">(VS Code is based in Electron and Chromium)</a><br/>
                With github providing the hardware requirements for compiling.<br/> <br/>
                I can have any Github side-project running and flying in less than two minutes!<br/>
                The instance type running the projects is a Basic (Linux): 2 cores, 4GB RAM.<br/>
                By now is barely immature. But for sure this can be the next step.<br/>
                Having the end-to-end developing process in one place.<br/>
                Code in GitHub CodeSpaces. Test, deploy and integrate with Github Actions.<br/>
                
                {/* Anyways. M1 came out and I ended up buying it 😅. <br/> */}
                {/* But the cheaper one since I'm considering all of this and taking a bet.<br/><br/> */}
                Microsoft development ecosystem keeps growing and growing.<br/><br/>

                This whole webpage has been written using GitHub CodeSpaces. <br/>
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