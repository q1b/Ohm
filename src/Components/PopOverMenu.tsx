import React,{Fragment} from 'react'
import { ChevronDownIcon,MenuIcon as Icon} from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import NavItemsData from '../data/data'

export default function PopOver(){
	return(
			<Popover as="div" >
				<Popover.Button className="w-max bg-white rounded-md inline-flex">
					<Icon className="w-10 h-10 text-white dark:text-emerald-900 "/>	
				</Popover.Button>
   <Transition
   			  as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="transform scale-95 opacity-0 "
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-out duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0 "
            >
				<Popover.Panel className="absolute w-screen max-w-sm px-4 mt-3 right-0">
					<div className="bg-white rounded-md ring-1 ring-gray-900 ring-opacity-50 p-4">
						<div className="grid grid-cols-1 gap-6">
							<PopOverItem/>
						</div>
					</div>
				</Popover.Panel>
			</Transition>	
			</Popover>
		)
}
function PopOverItem(){
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
	return(<>
			{ NavItemsData.map((NavItemData)=>{return(
			<div className=" flex item-center bg-coolGray-200 dark:bg-orange-100 p-2 place-content-between rounded-lg ">
				<div key={NavItemData.NavItemId} className="flex place-content-between w-max">
					{<NavItemData.NavItemSvgIcon className="w-6 h-6 text-blueGray-800 dark:text-orange-500 mr-2"/>}
					<h1 className="text-blueGray-500 dark:text-yellow-400">{NavItemData.NavItemName}</h1>
				</div>
				<ChevronDownIcon className="w-6 h-6 text-emerald-900"/>
			</div>
				)})
			}
					</>
			)
}