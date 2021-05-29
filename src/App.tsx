
import  PopOver  from "./Components/PopOverMenu";
import React from "react";
import NavBar from './Components/NavBar';
// import Acc from "./Components/Accorsion"
import InputField from "./Components/SubComponents/inputField";
import ProfileImg from "./Components/SubComponents/SriSriProfileImage"
import ToggleButton from "./Components/SubComponents/ToggleButton";

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen bg-coolGray-800 dark:bg-lime-100 ">
        <header className="sticky flex top-0 bg-blueGray-900 dark:bg-lime-400 !bg-opacity-50 h-[96px] place-content-around items-center w-full backdrop-filter backdrop-blur">
        {/*<header className="flex flex-row place-content-around items-center w-full py-5 bg-white ">*/}
          <ProfileImg />
          <InputField/>
          <div className="w-48 flex-shrink"></div>
          {/*<nav className="flex h-auto rounded-lg place-content-center dark:bg-warmGray-500 ">*/}
          <ToggleButton />
            <NavBar />
            <PopOver/>
          </header>
          {/*</nav>*/}
      </div>
      {/*<Acc/>*/}
    </>
  );
}

export default App;
