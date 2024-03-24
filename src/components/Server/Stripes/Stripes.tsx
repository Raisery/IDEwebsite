import React from 'react';

//find a better way to diplay the strpies in the bg
function Stripes() {
    return (
        <div className="flex justify-between -z-10 fixed top-0 left-0 w-screen h-screen">
            <div className="w-2/6 hidden laptop:block"></div>
            <div className="flex justify-between h-full w-full laptop:w-3/5 laptop:justify-around">
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden tablet:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden tablet:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden tablet:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
                <div className="h-full w-[7%] bg-black hidden tablet:block"></div>
                <div className="h-full w-[7%] bg-black"></div>
            </div>
            <div className=" w-2/6 hidden laptop:block"></div>
        </div>
    );
}

export default Stripes;
