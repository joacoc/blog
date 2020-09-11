import React, { useState } from "react";
import Transition from "../Transition";

export default function About() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="m-10">
            <div className="text-center m-2">
                <img className="inline-block h-20 w-20 rounded-full" src="myself.png" alt=""></img>
                <h2 className="text-lg">Joaquin Colacci</h2>
                <div className="text-blue-600">Developer</div>
                <div className="text-gray-600">joaquincolacci@gmail.com</div>
            </div>
            <div id="presentationBody" className="text-center mt-10 w-4/5 m-auto">
                <p>
                    Hey there. This page is intended to let my mind express freely.
                    <br/>If you want to share me some thoughts feel free to reach my out.
                </p>

                <span className="inline-flex rounded-md shadow-sm mt-5">
                    <button
                        onClick={() => (setOpen(!isOpen))}
                        type="button"
                        className="inline-flex items-center px-6 py-2 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                        Resume
                    </button>
                </span>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {/* <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"> */}
                    {/* <div className="rounded-md bg-white shadow-xs">Snipped</div> */}
                    {/* </div> */}
                    <p className="mt-5">
                    This is a very brief and relaxed resume of me.
                    <br/>I've been working on Telefonica (Telecommunications) and Michelin (Tyres).
                    <br/>They are big co's not fully technological. Anyways I've been always focused on the startup world.
                    <br/>My areas of delight can be almost anything related to technology and ventures.
                    <br/>Data engineering? Of course I like.
                    <br/>Product experience? Let's dig it.
                    <br/>Full stack? Count on me.
                    <br/>Need to write an article? I will try my best.
                    <br/>Let's run a company? Let's do it.
                    <br/>As you can notice, my experience is broad and not focused on a simple topic in depth.
                    <br/>Anyways in data engineering I stand out a little more.
                </p>
                </Transition>
            </div>
        </div>
    );
}