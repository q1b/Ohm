import React from "react";
import NavBox from "./Components/NavBox";
import NavItemsData from "./data/data";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white place-content-center">
      <header className="flex flex-col items-center justify-center w-screen py-5 bg-white place-content-center">
        <nav className="flex h-auto m-2 bg-black rounded-lg place-content-center dark:bg-warmGray-500 ">
          <div className="flex flex-wrap px-2 pt-1 pb-2 transition-colors ease-in-out delay-75 rounded-lg shadow w-max place-content-center bg-blueGray-800 hover:bg-blueGray-900 dark:bg-white">
            {NavItemsData.map((NavItemData) => {
              return (
                <NavBox
                  id={NavItemData.NavItemId}
                  text={NavItemData.NavItemName}
                  svgIcon={
                    <NavItemData.NavItemSvgIcon className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]" />
                  }
                  NavItemPos={NavItemData.NavItemPos}
                />
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
