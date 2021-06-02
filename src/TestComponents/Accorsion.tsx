import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
export default function Accorsion() {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Disclosure as="div" className="block">
          {({ open }) => (
            <div
              className={classNames(
                open ? "h-48 w-64" : "h-24 w-64",
                "bg-white group shadow-md p-4 rounded-lg"
              )}
              style={{ transition: "height 300ms ease-in-out" }}
            >
              <Disclosure.Button className="text-3xl bg-blueGray-900 text-white group-hover:text-cyan-400 font-round px-3 py-1.5 rounded-md focus:outline-none ring-0 ring-black focus:ring-4 ">
                Life
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out delay-75"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-400"
                leaveTo="transform scale-95 opacity-0 "
              >
                <Disclosure.Panel
                  static
                  className="text-xl text-orange-600 m-0.5 p-0.5 rounded-md "
                >
                  <div className="px-3 py-1 mt-3 rounded-lg bg-gradient-to-tr from-amber-300 to-yellow-200">
                    <h1>Nice to see this all</h1>
                  </div>
                  <div className="px-3 py-1 mt-3 rounded-lg bg-gradient-to-tr from-amber-300 to-yellow-200">
                    <h1>Nice to see this all</h1>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </div>
    </>
  );
}
