import React, { useState } from "react";
import Pages from "../Pages";
import { Link } from "react-router-dom";

export default function Home() {
    const [pageNumber, setPageNumber] = useState(0);
    const Page = Pages[pageNumber];

    return (
        <div className="text-center w-1/2 m-auto block">
            <div className="text-right mt-10 mb-10">
                <Link to="/about">
                    About
                </Link>
            </div>
            <Page/>
            <div>
                {pageNumber > 0 
                && (
                    <span className="inline-flex rounded-md shadow-sm">
                        <button
                            onClick={() => {setPageNumber(pageNumber - 1)}}
                            type="button"
                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                            Back
                        </button>
                    </span>
                )}
                {pageNumber === Pages.length + 1 
                &&  (
                    <span className="inline-flex rounded-md shadow-sm float-right">
                        <button 
                            onClick={() => {setPageNumber(pageNumber + 1)}}
                            type="button"
                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                            Next
                        </button>
                    </span>
                )}
            </div>
        </div>
    );
}