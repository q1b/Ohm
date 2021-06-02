import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
// import { FocusTrap } from '@headlessui/react'
export default function InputField() {
  return (
    <div
      className="bg-blueGray-900 dark:bg-green-600 	lg:h-12  	lg:w-[16.6rem] p-2 	lg:px-2 	lg:py-1.5 rounded-full 	lg:rounded-xl flex item-center justify-center place-content-start focus-within:bg-[#000E1E] group"
      tabIndex={0}
    >
      <SearchIcon className="h-8 w-8 	lg:h-auto 	lg:w-auto 	lg:mr-1.5 	lg:ml-0.5 text-blueGray-700 dark:text-lime-300 group-focus-within:text-white" />
      <input
        type="text"
        className="hidden 	lg:!flex text-xl focus:outline-none bg-blueGray-900 dark:!bg-green-600 group-focus-within:bg-[#000E1E] placeholder-white placeholder-opacity-50 group-focus-within:placeholder-opacity-90 text-white dark:text-lime-200 "
        style={{ caretColor: "#FFF" }}
        placeholder="Search"
      />
    </div>
  );
}
