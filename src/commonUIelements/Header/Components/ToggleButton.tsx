import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/outline";

export default function toggleButton() {
    const [dark, setDark] = useState(false);
    const [angle, setAngle] = useState(45);
    function ToggleTheme() {
        if (!document.documentElement.classList.contains("dark")) {
            setDark(!dark);
            document.documentElement.classList.add("dark");
            setAngle(angle + 90);
        } else {
            setDark(!dark);
            document.documentElement.classList.remove("dark");
            setAngle(angle + 90);
        }
    }
    return (
        <>
            <button onClick={ToggleTheme}
                className="p-1 mr-8 sm:p-1 duration-500 ease-out transform rotate-90 rounded-full cursor-pointer bg-blueGray-900 focus:outline-none focus:ring-2 dark:bg-orange-500">
                <Transition show={dark}
                    enter="transition-transform transition-opacity duration-1000 ease-in-out"
                    enterFrom="opacity-0 scale-0"
                    enterTo="opacity-100 scale-100"
                    leave="transition-transform transition-opacity duration-1000 ease-in-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-80">
                    <SunIcon className="w-8 sm:w-12 h-auto text-white "/>
                </Transition>
                <Transition show={
                        !dark
                    }
                    enter="transition-transform transition-opacity duration-1000 ease-in-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition-transform transition-opacity duration-1000 ease-in-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-80">
                    <MoonIcon className="w-8 sm:w-12 h-auto !text-white transform -rotate-90"/>
                </Transition>
            </button>
        </>
    );
}
