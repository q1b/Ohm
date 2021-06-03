import React,{useState} from 'react'
import Impact_Data from '../data'
// import {Transition} from '@headlessui/react'
import {ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Transition } from '@headlessui/react';

export default function MakingImpact(){
  
  const [current,setCurrent] = useState(0);
  const length = Impact_Data.length;

  const nextImpact = () => {
    setCurrent(current=== length-1 ? 0 : current +1 )
  }
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

	return(	
      <section className="w-full grid grid-cols-1 place-items-center place-content-center py-10 bg-[#000C15] dark:bg-white">
        <div className="mb-10">
          <h1 className="text-[4vw] sm:text-2xl md:text-4xl text-white dark:text-lime-500 underline font-round">
            Some Light Over What Sri Sri Did in Past
          </h1>
        </div>
        {Impact_Data.map((object,index)=>{
          return(
        <Transition as="section" key={index} className={classNames(`${object.FromColor} ${object.ToColor} bg-gradient-to-tr dark:from-yellow-400 dark:to-orange-500 w-[95vw] md:w-[80vw] rounded-lg`)}
          show={index===current}
          enter="transition-opacity duration-1000 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          
          <section className='flex p-5 md:p-4 place-content-between'>
                <div className={classNames('flex place-content-between w-full')}>
                  <h1 className="font-sans w-max font-bold text-white dark:text-orange-900 text-4xl md:text-7xl line-clamp-1">
                    {object.head}
                  </h1>
                 <object.Icon className="w-10 h-auto md:w-16 text-white  dark:text-white" />
                </div>
          </section>
          <div className="px-4 pt-1 pb-4"> 
            <div className="p-2 bg-white dark:bg-orange-100 rounded-lg">
            <blockquote className={`mx-1 text-[1.09rem] font-round ${object.subHeadColor} dark:text-amber-600 line-clamp-4`}>
              {object.subHead}
            </blockquote>
            </div>
            <h1 className="text-white line-clamp-5 sm:line-clamp-6 md:line-clamp-7 lg:line-clamp-8 text-[1.09rem] m-2 font-round rounded-lg">
              {object.content}
            </h1>
            <article className="flex place-content-between place-items-center">
              <button className="p-2 m-2 text-purple-600 dark:text-amber-600 bg-white rounded-lg focus:outline-none focus:ring-2 ">
                Read more
              </button>
              <button onClick={nextImpact} className="bg-white w-10 h-10 focus:ring-2 focus:outline-none rounded-full">
              	<ArrowCircleRightIcon className="w-10 h-10 text-indigo-900 dark:text-amber-600"/>
              </button>
            </article>
          </div>
        </Transition>
        )})}
      </section>
	)
}