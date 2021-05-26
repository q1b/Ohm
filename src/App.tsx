import React from "react";

function App() {
  return (
      <div
        className="flex flex-col items-center w-full h-full bg-white place-content-center"
      >
        <button
          className="relative self-start p-2 m-5 bg-lime-400 w-11 h-11 sm:m-6 focus:outline-none rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button
          className="relative self-start p-2 m-5 bg-blueGray-900 w-11 h-11 sm:m-6 focus:outline-none rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="text-lightBlue-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
        <header
          className="flex flex-col items-center justify-center w-screen py-5 bg-white place-content-center"
        >
          <nav
            className="flex w-11/12 h-auto py-5 m-2 bg-black rounded-lg place-content-center dark:bg-warmGray-500 "
          >
            <div
              className="flex flex-wrap px-2 pt-1 pb-2 transition-colors ease-in-out delay-75 rounded-lg shadow w-max place-content-center bg-blueGray-800 hover:bg-blueGray-900 dark:bg-white"
            >
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center pr-0.5 mr-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) )"}}
                >
                  Life
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction: "cubic-bezier(0.97, 0.07, 0.18, 0.71)"}}
                  />
                </article>
              </div>
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center px-0.5 mx-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) );"}}
                >
                  Work
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction: "cubic-bezier(0.97, 0.07, 0.18, 0.71);"}}
                  />
                </article>
              </div>
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center px-0.5 mx-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) );"}}
                >
                  Wisdom
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction:"cubic-bezier(0.97, 0.07, 0.18, 0.71);"}}
                  />
                </article>
              </div>
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center px-0.5 mx-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) );"}}
                >
                  Events
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction: "cubic-bezier(0.97, 0.07, 0.18, 0.71);"}}
                  />
                </article>
              </div>
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center px-0.5 mx-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) );"}}
                >
                  Blog
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction:"cubic-bezier(0.97, 0.07, 0.18, 0.71);"}}
                  />
                </article>
              </div>
              <div
                id="textBlue-container"
                className="flex flex-col w-max items-center pl-0.5 ml-1 cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out"
              >
                <div
                  className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 dark:text-white w-auto h-[13px] sm:h-[14.5px] md:h-[16px] bg-blue-600 dark:bg-orange-500 rounded-full p-[1px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <h1
                  className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                  style={{fontSize:"calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) );"}}
                >
                  Contacts
          </h1>
                <article className="flex w-[95%]">
                  <div
                    className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out"
                  />
                  <div
                    className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                    style={{transitionTimingFunction:"cubic-bezier(0.97, 0.07, 0.18, 0.71);"}}
                  />
                </article>
              </div>
            </div>
          </nav>
        </header>
      </div>

  );
}

export default App;
