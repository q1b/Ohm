import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/solid";

function DropDown(): JSX.Element {
  return (
    <div className="flex justify-end min-h-screen p-4 bg-indigo-100">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            {/*Menu Button*/}
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-blueGray-400 group hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-indigo-500">
              Options Menu
              <SunIcon className="w-5 h-auto ml-1 text-gray-400 group-hover:text-white" />
            </Menu.Button>
            <Transition
              show={open}
              enter="transform transition duration-300 ease-in"
              enterFrom="opacity-0 scale-80 "
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-100 ease-out"
              leaveFrom="opacity-100 scale-80"
              leaveTo="opacity-0 scale-100"
            >
              {/*Menu Items*/}
              <Menu.Items
                // static
                className="absolute right-0 w-56 mt-2 bg-white divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#"
                          className={`group flex item-center px-4 py-2 text-sm
								${active ? "bg-indigo-600 text-white" : "text-gray-700"} `}
                        >
                          <SunIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          Ic
                        </a>
                      );
                    }}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#"
                          className={`group flex item-center px-4 py-2 text-sm
								${active ? "bg-indigo-600 text-white" : "text-gray-700"} `}
                        >
                          <SunIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          Home
                        </a>
                      );
                    }}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#"
                          className={`group flex item-center px-4 py-2 text-sm
								${active ? "bg-indigo-600 text-white" : "text-gray-700"} `}
                        >
                          <SunIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          Home
                        </a>
                      );
                    }}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#"
                          className={`group flex item-center px-4 py-2 text-sm
								${active ? "bg-indigo-600 text-white" : "text-gray-700"} `}
                        >
                          <SunIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          Home
                        </a>
                      );
                    }}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#"
                          className={`group flex item-center px-4 py-2 text-sm
								${active ? "bg-indigo-600 text-white" : "text-gray-700"} `}
                        >
                          <SunIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          Home
                        </a>
                      );
                    }}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  );
}
export default DropDown;
