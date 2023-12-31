import React, { createElement } from 'react'

//find a better way to diplay the strpies in the bg
function Stripes() {
    return (
        <div className="flex justify-between -z-10 fixed top-0 left-0 right-0 bottom-0">
            <div className="w-2/6 hidden lg:block"></div>
            <div className="flex justify-between h-full w-full lg:w-3/5 lg:justify-around">
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden md:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden md:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden md:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden md:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
            </div>
            <div className=" w-2/6 hidden lg:block"></div>
        </div>
    )
}

export default Stripes
