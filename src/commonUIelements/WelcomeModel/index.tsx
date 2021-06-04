import React,{useState,useEffect} from 'react'
import {Transition} from '@headlessui/react'

export default function WelcomeModel(){
	const [hidden,setHidden] = useState(false)
	function setToHidden(){
		document.querySelector('body')?.classList.remove('no-sroll')
    setHidden(true)
	}
  useEffect(()=>{
    document.querySelector('body')?.classList.add('no-sroll')
  },[])
	return(
	<Transition as='article' 
      enter="transition-opacity duration-500 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-transform transition-opacity duration-500 ease-in"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-80 opacity-0"
      className=" absolute top-0 z-[60] w-full h-screen bg-[#00000055] backdrop-blur backdrop-filter grid place-items-center"
      show={!hidden}>
	<div className='bg-gradient-to-tr max-w-[400px] z-10 overflow-hidden from-[#0f122244] to-[#00000077] w-[95vw] h-[95vh] rounded-xl backdrop-blur-[1.5px] backdrop-saturate-100 border-warmGray-100 border-[2px] backdrop-filter' style={{boxShadow:"inset 0px 0px 10px 1px #FFFFFF77,inset 0px 0px 100px 1px #FFFFFF55,inset 0px 0px 200px 100px #AAFFFF17"}} >
    <header className="flex place-content-between p-2">
      <article className="flex flex-row place-items-center items-center text-white font-round text-3xl">
        <h1 className="ml-2">I am Sukhpreet Singh,</h1>
      </article>
      <button onClick={setToHidden} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      </button>
    </header>
    <hr />
    <table className="table-fixed w-full text-white font-jetMono mt-1">
      <thead>
        <tr className="divide-x-2">
          <th className="w-2/5 px-4 py-2">Functionality</th>
          <th className="w-1/5 px-4 py-2">Check</th>
          <th className="w-1/5 px-4 py-2">Start Date</th>
          <th className="w-1/5 px-4 py-2">End Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" border px-4 py-2">NavBar</td>
          <td className=" border px-4 py-2">Done</td>
          <td className=" border px-4 py-2">26May</td>
          <td className=" border px-4 py-2">29May</td>
        </tr>
        <tr>
          <td className=" border px-4 py-2">Home Page</td>
          <td className=" border px-4 py-2">...</td>
          <td className=" border px-4 py-2">29May</td>
          <td className=" border px-4 py-2">...</td>
        </tr>
      </tbody>
    </table>
    <section className="bg-white rounded-l-full py-[4px] mt-2 ml-2 flex place-items-center">
        <img className="float-right object-cover object-right h-40 ml-3 w-40 rounded-full" src="https://www.srisriravishankar.org/wp-content/uploads/2020/07/130.jpg" alt=""/>
        <h1 className="text-blueGray-900 text-[0.8rem] font-round p-2 font-bold">SriSri has been giving us more things then I can imagine, he is a dynamic personality. I am just fulfilling my wish to give him something. That also giving is might be useless in front of endless fountain of Energy.Hey ,Guru make me Hollow and Empty which I am already Is! . </h1>
    </section>
    <section className="bg-white w-full mt-2 text-white place-items-center">
      <article className="bg-white text-blue-500 w-full py-1 px-2">
        Bless Me With Nothing,
      </article>
      <article className="bg-green-300 w-full py-1 px-2">
        Bless Me with, the energy highest,
      </article>
      <article className="bg-orange-300 text-orange-900 w-full py-1 px-2">
		{/*Bless Me With EveryThing ,*/} 
       Bless Me With the Best
      </article>      
    </section>
  </div>
  </Transition>
	)
}