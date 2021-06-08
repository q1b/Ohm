import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import NavItemsData, { Nav } from "../NavItemsData";

function NavBar() {
  const paddingR = "pr-0.5 mr-1";
  const paddingL = "pl-0.5 ml-1";
  const paddingM = "px-0.5 mx-1";
  function PadAssign(NavItemPos: string) {
    if (NavItemPos === "Top") {
      return paddingL;
    } else if (NavItemPos === "Lst") {
      return paddingR;
    } else {
      return paddingM;
    }
  }
  const paddingER = "mr-3.5";
  const VIPpaddingEr = "!mr-4";
  function ExtraSpaceFroDropDown(SubItem: Boolean, NavItemName: String) {
    if (SubItem && NavItemName === "Life") {
      return VIPpaddingEr;
    } else if (SubItem) {
      return paddingER;
    }
  }

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="md:!flex hidden px-2 pt-1 pb-2 transition-colors ease-in-out delay-75 rounded-lg shadow select-none w-max place-content-center bg-blueGray-800 hover:bg-blueGray-900 dark:bg-white">
        {NavItemsData.map((NavItemData): JSX.Element => {
          return (
            <Menu as="div" key={NavItemData.Id.toString()} className="">
              {({ open }) => (
                <Fragment>
                  <Menu.Button
                    as="div"
                    key={NavItemData.Id.toString()}
                    className={classNames(
                      PadAssign(NavItemData.Pos),
                      ExtraSpaceFroDropDown(
                        NavItemData.SubItem,
                        NavItemData.Name
                      ),
                      open ? "!scale-95" : "scale-100",
                      " flex flex-col w-max items-center cursor-pointer group py-0.5 transform scale-100 hover:scale-95 focus:scale-95 focus:outline-none transition-transform delay-100 ease-out"
                    )}
                  >
                    <div
                      className={classNames(
                        open ? "animate-pulse !grid" : "",
                        "hidden group-hover:!grid group-focus:!grid grid-cols-1 absolute -top-1 -left-2 group-focus:animate-pulse group-hover:animate-pulse"
                      )}
                    >
                      {
                        <NavItemData.Icon className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]" />
                      }
                    </div>
                    <h1
                      className={classNames(
                        open
                          ? "!from-white !to-white dark:!from-rose-500 dark:!to-orange-400"
                          : "",
                        "text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-focus:from-white group-hover:to-white group-focus:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-focus:from-rose-500 dark:group-hover:to-orange-400 dark:group-focus:to-orange-400 bg-clip-text"
                      )}
                      style={{
                        fontSize:
                          "calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) )",
                      }}
                    >
                      {NavItemData.Name}
                      <ChevronDownIcon
                        className={classNames(
                          open ? "dark:!bg-rose-500 " : "rotate-[180deg]",
                          "inline-block top-1/2 ml-0.5 mt-0.5 transform -translate-y-1/2 absolute w-3.5 h-3.5 bg-blueGray-900 dark:bg-lime-700 dark:group-hover:bg-rose-500 rounded-full p-0.5 text-white transition delay-100 ease-in-out"
                        )}
                      />
                    </h1>
                    <article className="flex w-[95%]">
                      <div
                        className={classNames(
                          open ? "!opacity-0" : "",
                          "relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                        )}
                      />
                      <div
                        className={classNames(
                          open ? "!w-[90%] animate-bounce" : "",
                          "absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                        )}
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.97, 0.07, 0.18, 0.71)",
                        }}
                      />
                    </article>
                  </Menu.Button>
                  <MenuItems
                    SubItemsList={NavItemData.SubItemList}
                    open={open}
                  />
                </Fragment>
              )}
            </Menu>
          );
        })}
        {Nav.map((NavOBject) => {
          return (
            <a
              href={NavOBject.Id.toString()}
              key={NavOBject.Id.toString()}
              className={classNames(
                PadAssign(NavOBject.Pos),
                " flex flex-col w-max items-center cursor-pointer group py-0.5 transform scale-100 hover:scale-95 focus:scale-95 focus:outline-none transition-transform delay-100 ease-out"
              )}
            >
              <div className="hidden group-hover:!grid group-focus:!grid grid-cols-1 absolute -top-1 -left-2 group-focus:animate-pulse group-hover:animate-pulse">
                {
                  <NavOBject.Icon className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]" />
                }
              </div>
              <h1
                className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-focus:from-white group-hover:to-white group-focus:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-focus:from-rose-500 dark:group-hover:to-orange-400 dark:group-focus:to-orange-400 bg-clip-text"
                style={{
                  fontSize:
                    "calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) )",
                }}
              >
                {NavOBject.Name}
              </h1>
              <article className="flex w-[95%]">
                <div className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out" />
                <div
                  className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.97, 0.07, 0.18, 0.71)",
                  }}
                />
              </article>
            </a>
          );
        })}
      </div>
    </>
  );
}
function MenuItems({ SubItemsList, open }: any) {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transform transition duration-300 ease-in"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transform transition duration-300 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Menu.Items
        static
        className="absolute mt-3 bg-white rounded-md shadow-lg w-max dark:bg-yellow-400 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div
          className="absolute -top-2 left-2 w-0 h-0 border-8 border-gray-400 dark:border-amber-500 transform rotate-[135deg] "
          style={{
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
        ></div>
        <div className="py-1">
          {SubItemsList.map((SubItemListItem: any): JSX.Element => {
            return (
              <Menu.Item as={React.Fragment} key={SubItemListItem.Id}>
                {({ active }) => {
                  return (
                    <a
                      href={SubItemListItem.href}
                      className={classNames(
                        active
                          ? "bg-indigo-600 dark:bg-amber-500 text-white dark:text-amber-700"
                          : "text-gray-700 dark:text-white",
                        "flex item-center px-4 py-2 text-sm transition-colors duration-200 ease-in-out"
                      )}
                    >
                      {active ? (
                        <SubItemListItem.SIcon className="w-5 h-5 mr-3 text-indigo-900 dark:text-orange-900 animate-spin" />
                      ) : (
                        <SubItemListItem.OIcon className="w-5 h-5 mr-3 text-gray-400 dark:text-white" />
                      )}
                      {SubItemListItem.Name}
                    </a>
                  );
                }}
              </Menu.Item>
            );
          })}
        </div>
      </Menu.Items>
    </Transition>
  );
}

export default NavBar;
