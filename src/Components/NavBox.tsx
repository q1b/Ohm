import React from 'react'

function NavBox({id,text,svgIcon,NavItemPos}:any){
    const paddingR = "pr-0.5 mr-1"
    const paddingL = "pl-0.5 ml-1"
    const paddingM = "px-0.5 mx-1"
    function PadAssign(){
      if(NavItemPos==="Top"){
        return(paddingL)
      }else if(NavItemPos==="Lst"){
        return(paddingR)
      }else{
        return(paddingM)
      }
    }

    return (
        <>
        <div
              id={id}
              className={`${PadAssign()} pr-0.5 mr-1 flex flex-col w-max items-center cursor-pointer group py-0.5 transform scale-100 hover:scale-95 transition-transform delay-100 ease-out`}
            >
              <div className="hidden group-hover:!grid grid-cols-1 absolute -top-1 -left-2 group-hover:animate-pulse">
                {svgIcon}
              </div>
              <h1
                className="text-transparent bg-gradient-to-tr from-cyan-500 to-white group-hover:from-white group-hover:to-white dark:from-green-500 dark:to-lime-400 dark:group-hover:from-rose-500 dark:group-hover:to-orange-400 bg-clip-text"
                style={{
                  fontSize:
                    "calc((13px) + ( (12) * ( ( (100vw) - (300px)) / ((1600) - (300)) ) ) )",
                }}
              >
                {text}
              </h1>
              <article className="flex w-[95%]">
                <div className="relative rounded-full w-full group-hover:opacity-0 group-hover:animate-bounce bg-white dark:bg-warmGray-400 h-[2px] transition-opacity delay-75 ease-in-out" />
                <div
                  className="absolute inline-block group-hover:w-[90%] rounded-full w-0 bg-cyan-400 dark:bg-rose-500 group-hover:animate-bounce h-[2px] transition-all delay-100"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.97, 0.07, 0.18, 0.71)",
                  }}
                />
              </article>
            </div>
        </>
    )
}
export default NavBox;