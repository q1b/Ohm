import React from "react";
import NavBar from "./Components/NavBar";
import PopOver from "./Components/PopOverMenu";
import ToggleButton from "./Components/ToggleButton";
import InputField from "./Components/inputField";
import SriSriProfileImage from "./Components/SriSriProfileImage";

export default function Header() {
  return (
    <>
      <SriSriProfileImage />
      <InputField />
      <div className="flex-shrink w-48"></div>
      {/*<nav className="flex h-auto rounded-lg place-content-center dark:bg-warmGray-500 ">*/}
      <ToggleButton />
      <NavBar />
      <PopOver />
    </>
  );
}
