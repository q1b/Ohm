import React from "react"
import Image from '../../lib/Images/SriSri_White_Cloths_Brown_Sofa.jpg'

export default function Home() {
	return(
   <div className="h-[calc(100vh-96px)] w-full flex items-end justify-center">
				<div className="bg-white dark:bg-green-500 dark:bg-opacity-20 mb-10 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">			
					<div className="m-5">
							<h1 className="text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold" style={{textShadow:'0.5px 0.5px 1px #00FFAA'}}>Buddha Purnima</h1>
							<p  className="text-coolGray-900 dark:text-green-100 mt-2 text-base lg:text-xl" style={{textShadow:'0.5px 0.5px 2px #000'}}>Buddha embodied silence & compassion, and the way for this is through Meditation. In this trying time, these values are more relevant.</p>
					</div>
				</div>
				<div className="absolute h-full top-[96px]">
					<div className="bg-black rounded-lg">
	        			<img className="z-0 rounded-lg h-[80vh] w-[90vw] lg:w-[60vw] lg:h-[calc(100vh-200px)] mt-4 w-full object-top object-cover" src={Image} alt="Image"/>
					</div>
				</div>
	</div>
	)
}