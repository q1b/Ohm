import React from "react";
import { Route } from "wouter";
// import Banner from './commonUIelements/Banner/Banner'
import Header from "./commonUIelements/Header";
import WelcomeModel from "./commonUIelements/WelcomeModel";
import Home from "./pages/Home";
import Life from "./pages/Life";

// import Acc from "./Components/Accorsion"
function App() {
  return (
    <>
      {/*<Banner />*/}
      <section className="flex flex-col place-content-around w-full bg-coolGray-800 dark:bg-lime-100 ">
        <WelcomeModel />
        <header className=" sticky z-50 px-2 flex top-0 bg-blueGray-900 dark:bg-lime-400 !bg-opacity-50 h-[96px] place-content-around items-center w-full backdrop-filter backdrop-blur">
          <Header />
        </header>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Life />
        </Route>
      </section>
    </>
  );
}
export default App;
