import React, { useState } from "react";
import Pages from "../Pages";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function Home() {
    const [pageNumber, setPageNumber] = useState(0);
    const Page = Pages[pageNumber];

    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
                <div className="text-right mt-10 mb-10 font-light">
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div>
                    <Page/>
                    <div id="nav-buttons">
                        <div className={"float-left"}>
                            {(pageNumber > 0) && <Button text="Back" onClick={() => { setPageNumber(pageNumber - 1) }} />}
                        </div>
                        <div className={"float-right"}>
                            {(pageNumber < Pages.length - 1) && <Button text="Next" onClick={() => { setPageNumber(pageNumber + 1) }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}