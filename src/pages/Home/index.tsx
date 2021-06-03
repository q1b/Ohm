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
      <section className="w-full p-5 py-20">
      <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
      {Timeline_Data.map((Now_Data,index)=>{return(
       <li key={index}>
          <article>
            <a
              href={Now_Data.href}
              className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6 hover:bg-white"
            >
              <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
                {Now_Data.Event}
              </h3>
              <time
                dateTime={Now_Data.Date.toISOString()}
                className="flex items-center row-start-1 mb-1 font-medium md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0"
              >
              <Now_Data.PlaceholderIcon/>
                {Now_Data.StringDate}
              </time>
              <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              {Now_Data.inDetail}
              </p>
            </a>
          </article>
        </li>        
      )})}
      </ul>
      </section>
    </>
  );
}

export default Home;
