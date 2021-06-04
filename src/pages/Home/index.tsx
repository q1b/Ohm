import React from "react";  
//Components
import ImageSection from "./Components/ImageSection";
import Making_Impact from "./Components/Making_Impact";
import Timeline_Data from "./data"
function Home() {
  return (
    <>
      <ImageSection />
      <Making_Impact />
      <section className="w-full flex place-content-center p-5 py-20 bg-black dark:bg-[#FF0030]">
      <ul className="p-2 max-w-[600px] rounded-3xl ">
      {Timeline_Data.map((Now_Data,index)=>{return(
       <li key={index}>
          <article>
            <a
              href={Now_Data.href}
              className="relative grid items-start px-3 pt-2 pb-3 overflow-hidden rounded-xl hover:bg-white dark:hover:bg-blueGray-900 transition-color duration-500 ease-in-out"
            >
              <h3 className="mb-1 text-xl text-blueGray-500 dark:text-white ml-8">
                {Now_Data.Event}
              </h3>
              <time
                dateTime={Now_Data.Date.toISOString()}
                className="flex items-center text-cyan-600 dark:text-red-900 row-start-1 mb-1 font-medium "
              >
              <Now_Data.PlaceholderIcon/>
                {Now_Data.StringDate}
              </time>
              <p className="text-[1.05rem] text-blueGray-900 dark:text-rose-900 ml-8">              
              {Now_Data.inDetail}
              </p>
            </a>
          </article>
        </li>        
      )})}
      </ul>
      </section>
      <section className="w-full py-10 place-items-center gap-3 bg-emerald-400 grid grid-cols-1 sm:grid-cols-3">
        <article className="w-48 h-60 bg-white rounded-lg">
          
        </article>
        <article className="w-48 h-60 bg-white rounded-lg">
          
        </article>
        <article className="w-48 h-60 bg-white rounded-lg">
          
        </article>
      </section>
    </>
  );
}

export default Home;
