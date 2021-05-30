import React,{Fragment} from 'react'
import { ChevronDownIcon,MenuIcon as Icon} from '@heroicons/react/outline'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import NavItemsData from '../../../data/data'

export default function PopOver(){
	return(
			<Popover as="div" className=" md:hidden">
			{({open})=>(
				<>
				<Popover.Button className="w-max bg-white rounded-md inline-flex">
					<Icon className="w-10 h-10 text-white text-gray-900 dark:text-emerald-900 "/>	
				</Popover.Button>
   <Transition
   			  as={Fragment}
   			  show={open}
              enter="transition ease-out duration-150"
              enterFrom="transform scale-95 opacity-0 "
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-out duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0 "
            >
				<Popover.Panel static className="absolute w-screen max-w-sm px-4 mt-5 right-0">
					<div className="bg-white ml-2 rounded-md ring-1 ring-gray-900 ring-opacity-50 p-4">
						<div className="grid grid-cols-1 gap-6">
							<PopOverItem/>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
			</>	
				)}
			</Popover>
		)
}
function PopOverItem(){
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
	return(<>
			{ NavItemsData.map((NavItemData)=>{return(
			<Disclosure key={NavItemData.Id}>
			{({open})=>(
				<div className={classNames(NavItemData.SubItem ? (open ? 'h-[21.7rem] ':'h-14') : "" ," flex rounded-md flex-col bg-white p-2 shadow-md")} style={{transition:"height 300ms ease-in-out"}}>
					<Disclosure.Button as={NavItemData.SubItem ? 'button':'a' } key={NavItemData.Id} className="bg-coolGray-200 w-full dark:bg-orange-100 p-2 flex place-content-between w-full rounded-md">
					<section className="flex w-max">
						{<NavItemData.Icon className="w-6 h-6 text-blueGray-800 dark:text-orange-500 mr-2"/>}
						<h1 className="text-blueGray-500 dark:text-yellow-400">{NavItemData.Name}</h1>
					</section>
					{ NavItemData.SubItem &&
						(<ChevronDownIcon className="w-6 h-6 text-emerald-900"/>)
					}
					</Disclosure.Button>
				{
					NavItemData.SubItem ?
					(
						NavItemData.SubItemList.map((SubNavItem)=>{return(

			<Transition
				 	show={open}
				 	key={SubNavItem.Id}
			        enter="transition duration-500 ease-out delay-75"
			        enterFrom="transform scale-95 opacity-0"
			        enterTo="transform scale-100 opacity-100"
			        leave="transition duration-200 ease-out"
			        leaveFrom="transform scale-100 opacity-400"
			        leaveTo="transform scale-95 opacity-0 "
			      >
							<Disclosure.Panel static key={SubNavItem.Id} className="text-sm text-blueGray-800 dark:text-orange-500 m-0.5 p-0.5 pl-3 rounded-md ">
							  <div className="flex item-center px-3 py-1 mt-3 rounded-lg bg-coolGray-200 w-full dark:bg-orange-100">
								  <SubNavItem.OIcon className="w-5 h-auto" />
								  <h1>{SubNavItem.Name}</h1>
							  </div>
						  </Disclosure.Panel>
						  </Transition>
						)})
					) 
					:""
				}
				  </div>
				)}
				
			</Disclosure>
				)})
			}
					</>
			)
}