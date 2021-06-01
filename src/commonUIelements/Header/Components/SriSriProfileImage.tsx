import React from 'react'
import Image from '../../../lib/Images/SriSriRaviShankar_Profile.jpg' 
function SriSriProfileImage(){
	return(
		<>
    <div className="flex-shrink-0 mr-2 bg-gradient-to-b  from-[#FFFFFF] dark:from-lime-200 dark:via-green-500 dark:to-green-400 to-[#ff2987] rounded-full h-20 w-20 relative">
      <img 
        className="rounded-full object-top absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
        alt="main-img"
        src={Image}
      />
    </div>
	</>
	)
}
export default SriSriProfileImage;