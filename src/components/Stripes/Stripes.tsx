import React, { createElement } from 'react'

//find a better way to diplay the strpies in the bg
function Stripes() {
    return (
        <div className="h-0 w-0">
            <div className="h-full w-4 bg-cyan-700/5 fixed left-0 top-0 bottom-0 z-1"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[6%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[12%] top-0 z-1 hidden sm:block "></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[18%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[24%] top-0 z-1"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[30%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[36%] top-0 z-1 hidden sm:block "></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[42%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[48%] top-0 z-1"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[54%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[60%] top-0 z-1 hidden sm:block "></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[66%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[73%] top-0 z-1"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[79%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[85%] top-0 z-1 hidden sm:block "></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed left-[92%] top-0 z-1 hidden lg:block"></div>
            <div className="h-full w-4 bg-cyan-700/5 fixed right-0 top-0 z-1"></div>
        </div>
    )
}

export default Stripes
