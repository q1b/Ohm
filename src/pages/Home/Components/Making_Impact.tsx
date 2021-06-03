import React from 'react'
import { SunIcon, MoonIcon, GlobeIcon } from "@heroicons/react/outline";
import {ArrowCircleRightIcon } from "@heroicons/react/solid";

export default function MakingImpact(){
	return(	
      <section className="w-full grid grid-cols-1 place-items-center min-h-[120vh] py-14 bg-[#000C15] dark:bg-white mt-10">
        <div className="">
          <h1 className="text-[4vw] sm:text-2xl md:text-4xl text-white dark:text-lime-500 underline font-round">
            Some Light Over What Sri Sri Did in Past
          </h1>
        </div>
        <section className="bg-gradient-to-tr from-fuchsia-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 mt-10 w-[95vw] md:w-[80vw] rounded-lg">
          {/*Grid to Show all Main DisCourse*/}
          <section className="flex p-5 md:p-4 place-content-between ">
              <div className="flex place-content-between w-full">
                <h1 className="font-sans w-max font-bold text-indigo-900 dark:text-orange-900 underline text-4xl md:text-7xl">
                  Making Impact
                </h1>
                <SunIcon className={`w-10 h-auto md:w-16 text-white dark:text-white `} />
              </div>
              <div className="flex hidden place-content-between w-full">
                <h1 className="font-sans w-max font-bold text-indigo-900 dark:text-orange-900 underline text-4xl md:text-7xl">
                  Making Impact
                </h1>
                <GlobeIcon className={`w-10 h-auto md:w-16 text-white dark:text-white `} />
              </div>
              <div className="flex hidden place-content-between w-full">
                <h1 className="font-sans w-max font-bold text-indigo-900 dark:text-orange-900 underline text-4xl md:text-7xl">
                  Making Impact
                </h1>
                <MoonIcon className={`w-10 h-auto md:w-16 text-white dark:text-white `} />
              </div>
          </section>
          <div className="p-4">
            <blockquote className="p-2 mx-1 text-purple-600 dark:text-amber-600 bg-indigo-100 dark:bg-orange-100 rounded-lg">
              The Colombian Government and the Revolutionary Armed Forces of
              Colombia (FARC) signed a historic peace pact that ends a
              52-year-old armed conflict yesterday. Playing an important role in
              the peace process was the Art of Living founder and humanitarian –
              Sri Sri Ravi Shankar.
            </blockquote>
            <h1 className="text-white line-clamp-5 sm:line-clamp-6 md:line-clamp-7 lg:line-clamp-8 text-[1.09rem] m-2 font-round rounded-lg">
              Last year, the spiritual leader had travelled to Cuba, Havana and
              Colombia, talking to both the parties, building trust between
              them. Last year, Sri Sri travelled to Cuba to meet the
              representatives of FARC, including the leader of the FARC-EP
              delegation, Iván Márquez. His efforts resulted in a major
              breakthrough in June 2015 when the FARC rebels announced a
              unilateral ceasefire. The strife had taken the lives of 220,000
              people and displaced more than 5 million. The government and the
              rebels had been talking peace since 2012, and had reached
              agreements on land reforms and drug trade. But what was needed was
              the healing touch of a spiritual leader that addressed the core
              values of the peace process. President Juan Manuel Santos
              remembered, "I had the great joy of speaking with him about his
              efforts to hopefully end an internal armed conflict that has
              lasted more than 50 years. Later on, with my consent, he met in
              Havana and Cuba with the negotiators of the FARC leaders to
              encourage them to follow the Gandhian principle of non-violence,
              and to cultivate the art of meditation and breathing." Márquez
              acknowledged that Sri Sri's teachings about the Gandhian principle
              of non-violence inspired them.
            </h1>
            <div className="flex place-content-between place-items-center">
              <button className="p-2 m-2 text-purple-600 dark:text-amber-600 bg-white rounded-lg focus:outline-none focus:ring-2 ">
                Read more
              </button>
              <button className="bg-white w-10 h-10 mr-1 focus:ring-2 focus:outline-none rounded-full">
              	<ArrowCircleRightIcon className="w-10 h-10 text-indigo-900 dark:text-amber-600"/>
              </button>
            </div>
          </div>
        </section>
      </section>
	)
}