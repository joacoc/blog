import React from "react";

export default function Button(props) {
    const { onClick, text } = props;

    return (
        <span className="rounded-md shadow-sm mt-auto">
            <button 
                onClick={onClick}
                type="button"
                className="inline-flex items-center px-6 py-2 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                {text}
            </button>
        </span>
    )
}