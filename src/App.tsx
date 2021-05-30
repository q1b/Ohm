import React from "react";
// import Banner from './commonUIelements/Banner/Banner'
import Header from './commonUIelements/Header'
// import Image from './lib/SriSri_White_Cloths_Brown_Sofa.jpg'
// import Acc from "./Components/Accorsion"

function App() {
  return (
    <>
      {/*<Banner />*/}
      <section className="flex flex-col w-full h-[900px] bg-coolGray-800 dark:bg-lime-100 ">
        <header className="sticky px-2 flex top-0 bg-blueGray-900 dark:bg-lime-400 !bg-opacity-50 h-[96px] place-content-around items-center w-full backdrop-filter backdrop-blur">
          <Header />
        </header>
      <h1 className=" text-5xl sm:text-7xl lg:text-9xl font-bold text-white dark:text-emerald-900 text-left ml-4 mt-4 sm:mt-0">Jai Gurudev</h1>
      <p className=" text-xl sm:text-2xl md:text-4xl lg:text-9xl font-bold text-white dark:text-emerald-900 text-left ml-8 mt-4 ">Sri Sri Ravi Shankar</p>
{/*      <div className="w-full h-[calc(100vh-96px)]">
        <img className="h-full w-full object-cover" src={Image} alt="Image" />
      </div>
*/}      </section>
    </>
  );
}

export default App;
