import React, { useEffect, useState } from "react";;
import {SunIcon,MoonIcon,GlobeIcon} from '@heroicons/react/outline';
import Data from "./ImageData";
import ImageS from "../../lib/Images/SriSriRaviShankar_Profile.jpg";

import { Transition } from "@headlessui/react";
function Home() {
  const [index, setIndex] = useState(0);
  const [header, setHeader] = useState("Me is You");
  const [content, setContent] = useState(
    "You are Me as You breath I also breath, I eat you Eat , I care You care."
  );
  const [Img, setImage] = useState(ImageS);
  const [visi, setVisi] = useState(true);
  function ChangeIndex(): void {
    if (index === Data.length - 1) {
      setIndex(0);
    } else {
      // alert(index)
      setIndex(index + 1);
    }
  }
  useEffect(() => {
    setTimeout(function () {
      setVisi(false);
    }, 1000);
    setTimeout(function (): void {
      const Datas: any = Data[index];
      setVisi(true);
      setImage(Datas.url);
      setContent(Datas.content);
      setHeader(Datas.header);
    }, 2000);
  }, [index]);

  useEffect(() => {
    setTimeout(function () {
      ChangeIndex();
    }, 7000);
  });

  return (
    <>
      <section className="h-[100vh] w-full flex items-center justify-center">
        <article className="absolute flex items-center justify-center h-[calc(100%-96px)] w-[calc(100%-10px)] top-[96px]">
          <div className="h-[97%] flex items-center justify-center md:w-[calc(90%)]  mt-2 md:mt-1 ">
            <Transition
              as={React.Fragment}
              show={visi}
              enter="transition-scale transform duration-500 ease-in-out"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transition-scale transform duration-1000 ease-in-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <img
                className={`h-full w-auto sm:w-full rounded-lg object-cover md:object-none"`}
                src={Img}
                alt=""
              />
            </Transition>
            <Transition
              as={React.Fragment}
              show={visi}
              enter="transition-opacity transform duration-500 ease-in-out"
              enterFrom="opacity-0 "
              enterTo="opacity-100 "
              leave="transition-opacity transform duration-500 ease-in-out"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
              <div className="absolute bottom-10 bg-white dark:bg-green-500 p-4 dark:bg-opacity-20 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">
                <h1
                  className="ml-0.5 sm:ml-2 text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold "
                  style={{ textShadow: "0.5px 0.5px 1px #00FFAA" }}
                >
                  <big className="font-comma absolute left-2.5 top-2.5">"</big>
                  {header}
                </h1>
                <blockquote
                  className="mt-2 text-base text-coolGray-900 dark:text-green-100 lg:text-xl"
                  style={{ textShadow: "0.5px 0.5px 2px #000" }}
                >
                  {content}
                </blockquote>
              </div>
            </Transition>
          </div>
        </article>
      </section>
      
      <section className="w-full grid grid-cols-1 place-items-center min-h-[120vh] py-10 bg-[#000C15] dark:bg-white mt-10">
        <div className="mx-10">
          <h1 className="text-white underline font-round text-4xl">Some Light Over What Sri Sri Did in Past</h1>
        </div>
        <section className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 dark:bg-orange-400 mt-10 w-[80vw] rounded-lg">
      {/*Grid to Show all Main DisCourse*/}
      <section className="flex place-content-between p-4">
        <h1 className="text-7xl font-sans font-bold underline text-indigo-900"> Making Impact </h1>
        <article className="flex flex-shrink-0 w-max">
          <div className="">
            <SunIcon   className={`lg:w-16 text-white dark:text-white ` }  />
          </div>
          <div className="absolute hidden">
            <GlobeIcon className={`lg:w-16 text-white dark:text-white `}/>
          </div>
          <div className="absolute hidden">
            <MoonIcon  className={`lg:w-16 text-white dark:text-white ` }  />
          </div>
        </article>
      </section>
        <div className="p-4">
        <blockquote className="p-2 mx-1 bg-indigo-600 text-white rounded-lg">
          The Colombian Government and the Revolutionary Armed Forces of Colombia (FARC) signed a historic peace pact that ends a 52-year-old armed conflict yesterday. Playing an important role in the peace process was the Art of Living founder and humanitarian – Sri Sri Ravi Shankar.
        </blockquote>
<h1 className="p-2 text-white text-[1.09rem] mt-2 font-round rounded-lg">Last year, the spiritual leader had travelled to Cuba, Havana and Colombia, talking to both the parties, building trust between them. Last year, Sri Sri travelled to Cuba to meet the representatives of FARC, including the leader of the FARC-EP delegation, Iván Márquez. His efforts resulted in a major breakthrough in June 2015 when the FARC rebels announced a unilateral ceasefire.
The strife had taken the lives of 220,000 people and displaced more than 5 million.

The government and the rebels had been talking peace since 2012, and had reached agreements on land reforms and drug trade. But what was needed was the healing touch of a spiritual leader that addressed the core values of the peace process. President Juan Manuel Santos remembered, "I had the great joy of speaking with him about his efforts to hopefully end an internal armed conflict that has lasted more than 50 years. Later on, with my consent, he met in Havana and Cuba with the negotiators of the FARC leaders to encourage them to follow the Gandhian principle of non-violence, and to cultivate the art of meditation and breathing."

Márquez acknowledged that Sri Sri's teachings about the Gandhian principle of non-violence inspired them.</h1>
<button className="m-2 p-2 bg-white rounded-lg text-purple-600">Read more</button>
        </div>      
        </section>
      </section>
    </>
  );
}
export default Home;

// "With the help of Sri Sri, we have placed our spirit to achieve reconciliation and coexistence of a big and benevolent country, whose destiny can’t be that of the war. The teachings of the Art of Living are essential to achieve a stable and long-lasting peace."

// One year later, yesterday, the peace pact has been signed. Gurudev Sri Sri Ravi Shankar on Wednesday congratulated Juan Manuel Santos, the Colombian President and Marcos Carratala, the FARC negotiator for announcing a bilateral ceasefire.

// During last one year, Sri Sri had meetings and dialogues with both parties (See the timeline below). He taught his stress-elimination techniques to members of the Colombian government as well as the FARC that gave them the experience of peace and struck a chord within them.