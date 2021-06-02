import React, { useEffect, useState } from "react"
import Data from './ImageData'
import {Transition} from '@headlessui/react'

export default function Home() {
	const [index,setIndex] = useState(0)
	const [header,setHeader]= useState(Data[index].header)
	const [content,setContent]= useState(Data[index].content)
	const [Img,setImage] = useState(Data[index].url)
	const [visi,setVisi] = useState(true)
	function ChangeIndex(){
		if(index===Data.length-1){
			setIndex(0)
		}else{
			// alert(index)
			setIndex(index+1)
		}
	}
	useEffect(()=>{
		setTimeout(
			function(){
				setVisi(false)
			},2000
		)
		setTimeout(
			function(){
				setVisi(true)
				setImage(Data[index].url)
				setContent(Data[index].content)
				setHeader(Data[index].header)
			},	3000
		);
	},[index] )

	useEffect(()=>{
		setTimeout(function(){
			ChangeIndex()
		},5000)
	})

	return(
	<>
   <section className="h-[calc(100vh-96px)] w-full flex items-center justify-center">
				<article className="absolute flex items-center justify-center h-[calc(100%-96px)] w-[calc(100%-10px)] top-[96px]">
					<div className="h-[97%] flex items-center justify-center md:w-[calc(90%)]  mt-2 md:mt-1 ">
						<Transition as={React.Fragment}
							show={visi}
							enter="transition-opacity duration-500 ease-in-out"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity duration-500 ease-in-out"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<img className={`transition-opacity duration-500 ease-out h-full w-auto sm:w-full rounded-lg object-cover md:object-none"`} src={Img} alt="" />
						</Transition>
						<div className="absolute bottom-10 bg-white dark:bg-green-500 p-4 dark:bg-opacity-20 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">			
								<h1 className="ml-0.5 sm:ml-2 text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold " style={{textShadow:'0.5px 0.5px 1px #00FFAA'}}><big className="font-comma absolute left-2.5 top-2.5">"</big>{header}</h1>
								<blockquote className="text-coolGray-900 dark:text-green-100 mt-2 text-base lg:text-xl" style={{textShadow:'0.5px 0.5px 2px #000'}}>{content}</blockquote>
						</div>
					</div>
				</article>
	</section>
	</>
	)
}