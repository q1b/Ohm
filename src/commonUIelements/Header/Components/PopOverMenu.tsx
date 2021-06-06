import React, { Fragment } from "react";
import { ChevronDownIcon, MenuIcon as Icon } from "@heroicons/react/outline";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import NavItemsData, { Nav } from "../NavItemsData";

export default function PopOver() {
  return (
    <Popover as="div" className=" md:hidden">
      {({ open }) => (
        <>
          <Popover.Button className="inline-flex bg-white rounded-md w-max">
            <Icon className="w-10 h-10 text-gray-900 dark:text-emerald-900 " />
          </Popover.Button>
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-150"
            enterFrom="transform scale-95 opacity-0 "
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-out duration-150"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0 "
          >
            <Popover.Panel
              static
              className="absolute right-0 w-screen max-w-sm px-4 mt-5"
            >
              <div className="p-4 ml-2 bg-white rounded-md ring-1 ring-gray-900 ring-opacity-50">
                <div className="grid grid-cols-1 gap-6">
                  <PopOverItem />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
function PopOverItem() {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {NavItemsData.map((NavItemData, index) => {
        return (
          <Disclosure as="div" key={index}>
            {({ open }) => (
              <div
                className={classNames(
                  open ? "h-[21.7rem] " : "h-14",
                  " flex rounded-md flex-col bg-white p-2 shadow-md"
                )}
                style={{ transition: "height 300ms ease-in-out" }}
              >
                <Disclosure.Button
                  as="button"
                  className="flex w-full p-2 rounded-md bg-coolGray-200 dark:bg-orange-100 place-content-between"
                >
                  <section className="flex w-max">
                    {
                      <NavItemData.Icon className="w-6 h-6 mr-2 text-blueGray-800 dark:text-orange-500" />
                    }
                    <h1 className="text-blueGray-500 dark:text-yellow-400">
                      {NavItemData.Name}
                    </h1>
                  </section>
                  <ChevronDownIcon className="w-6 h-6 text-emerald-900" />
                </Disclosure.Button>
                {NavItemData.SubItemList.map((SubNavItem, index) => {
                  return (
                    <Transition
                      key={index}
                      as={Fragment}
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
                        key={index}
                        className="text-sm text-blueGray-800 dark:text-orange-500 m-0.5 p-0.5 pl-3 rounded-md "
                      >
                        <a
                          href={SubNavItem.href}
                          className="flex w-full px-3 py-1 mt-3 rounded-lg item-center bg-coolGray-200 dark:bg-orange-100"
                        >
                          <SubNavItem.OIcon className="w-5 h-auto" />
                          <h1>{SubNavItem.Name}</h1>
                        </a>
                      </Disclosure.Panel>
                    </Transition>
                  );
                })}
              </div>
            )}
          </Disclosure>
        );
      })}
      {Nav.map((NavOBject) => {
        return (
          <Fragment>
            <div
              key={NavOBject.Id.toString()}
              className="flex flex-col p-2 bg-white rounded-md shadow-md h-14"
            >
              <a
                href={NavOBject.Id.toString()}
                className="flex w-full p-2 rounded-md bg-coolGray-200 dark:bg-orange-100 place-content-between"
              >
                <section className="flex w-max">
                  {
                    <NavOBject.Icon className="w-6 h-6 mr-2 text-blueGray-800 dark:text-orange-500" />
                  }
                  <h1 className="text-blueGray-500 dark:text-yellow-400">
                    {NavOBject.Name}
                  </h1>
                </section>
              </a>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
