import React from "react";
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white place-content-center">
      <header className="flex flex-col items-center justify-center w-screen py-5 bg-white place-content-center">
        <nav className="flex h-auto m-2 bg-black rounded-lg place-content-center dark:bg-warmGray-500 ">
          <NavBar/>
        </nav>
      </header>
    </div>
  );
}

export default App;
