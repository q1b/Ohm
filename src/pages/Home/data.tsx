import React from 'react'

interface Timeline_Data{
	Event:string,
	Place:string,
	Date:Date,
	StringDate:string,
	PlaceholderIcon:any,
	inDetail:string,
	href:string,
}

const Impact_Data:Timeline_Data[] = [
	{
		Event:'Sudarshan Kriya revelation to SriSri',
		Place:' Shimoga district ',
		Date: new Date( 1981, 17 ),
		StringDate:'1981',
		PlaceholderIcon:ActiveCircle,
		inDetail:'Sri Sri Ravi Shankar entered a ten-day period of silence in Shimoga located in the Indian state of Karnataka. The Sudarshan Kriya, a powerful breathing technique, was born.',
		href:''
	},
    {
    Event:'Formation of Art of living organization',
    Place:'',
    Date: new Date( 1981 ),
    StringDate:'1981',
    PlaceholderIcon:InactiveCircle,
    inDetail:'The Art of Living Foundation is a volunteer-based, humanitarian and educational non-governmental organization (NGO).Now,The Art of Living Foundation has centers in more than 156 countries .Art of Living offers several stress-elimination and self-development programs based on breathing techniques, meditation and yoga',
    href:''
  },
]

function ActiveCircle(){
	return (
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 mr-6 overflow-visible text-cyan-400 dark:text-white "
                >
                  <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                  <circle
                    cx="6"
                    cy="6"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M 6 18 V 500"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="text-gray-200"
                  ></path>
                </svg>
		)
}

function InactiveCircle(){
	return (
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                >
                  <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                  <path
                    d="M 6 -6 V -30"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="text-gray-200"
                  ></path>
                </svg>
		)
}
export default Impact_Data;