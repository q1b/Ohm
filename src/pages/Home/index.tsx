import React,{useState} from "react"
import Image1 from '../../lib/Images/SriSri_White_Cloths_Brown_Sofa.jpg'
import Image2 from '../../lib/Images/SriSriRaviShankar_Profile.jpg'
export default function Home() {
	let [Image,setImage] = useState(Image1)
	function NextImage(){
		setTimeout(function(){ setImage(Image = Image2) }, 3000);
	}
	return(
	<>
   <section className="h-[calc(100vh-96px)] w-full flex items-end justify-center">
				<article className="relative -top-10 bg-white dark:bg-green-500 p-4 dark:bg-opacity-20 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">			
							<h1 className="text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold" style={{textShadow:'0.5px 0.5px 1px #00FFAA'}}>Buddha Purnima</h1>
							<p  className="text-coolGray-900 dark:text-green-100 mt-2 text-base lg:text-xl" style={{textShadow:'0.5px 0.5px 2px #000'}}>Buddha embodied silence & compassion, and the way for this is through Meditation. In this trying time, these values are more relevant.</p>
				</article>
				<article className="absolute flex items-center justify-center h-[calc(100%-96px)] w-[calc(100%-10px)] top-[96px]">
					<img className="h-[97%] md:w-auto rounded-lg mt-2 md:mt-1 object-contain" src={Image} alt="" />
				</article>
	</section>
	<button className="cursor-pointer relative z-20 w-20 h-20 bg-white" onClick={NextImage}/>
	</>
	)
}