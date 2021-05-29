import React from 'react'
import Image from '../../lib/SriSriRaviShankar_Profile.jpg' 
function SriSriProfileImage(){
	return(
		<>
			<img className="w-20 object-top h-20 border-4 border-gray-100 ring-[0.1rem] ring-purple-600 dark:ring-lime-700 object-cover rounded-full flex-shrink-0" src={Image} alt="SriSri" />
		</>
	)
}
export default SriSriProfileImage;