import React from "react"
import Image from '../../lib/Images/SriSri_White_Cloths_Brown_Sofa.jpg'

export default function Home() {
	return(
   <section className="h-[calc(100vh-96px)] w-full flex items-center justify-center">
				<article className="absolute flex items-center justify-center h-[calc(100%-96px)] w-[calc(100%-10px)] top-[96px]">
					<div className="h-[97%] flex items-center justify-center md:w-[calc(90%)]  mt-2 md:mt-1 ">
						<img className="h-full rounded-lg object-cover" src={Image} alt="" />
					<article className="absolute bottom-10 bg-white dark:bg-green-500 p-4 dark:bg-opacity-20 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">			
								<h1 className="text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold" style={{textShadow:'0.5px 0.5px 1px #00FFAA'}}>Buddha Purnima</h1>
								<p  className="text-coolGray-900 dark:text-green-100 mt-2 text-base lg:text-xl" style={{textShadow:'0.5px 0.5px 2px #000'}}>Buddha embodied silence & compassion, and the way for this is through Meditation. In this trying time, these values are more relevant.</p>
					</article>
					</div>
				</article>
	</section>
	)
}