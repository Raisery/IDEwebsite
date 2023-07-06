import Image from 'next/image'
import React, { createElement } from 'react'
import radialBg from '../../assets/radial-bg.svg'

function Stripes() {        

    return (
        <div>
            <Image className='w-full h-full object-cover absolute top-0 left-0 z-1' src={radialBg} alt='background' ></Image>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-0 top-0 z-1'></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[6%] top-0 z-1 hidden lg:block'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[12%] top-0 z-1 hidden sm:block '></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[18%] top-0 z-1 hidden lg:block'></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[24%] top-0 z-1'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[30%] top-0 z-1 hidden lg:block'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[36%] top-0 z-1 hidden sm:block '></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[42%] top-0 z-1 hidden lg:block'></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[48%] top-0 z-1'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[54%] top-0 z-1 hidden lg:block'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[60%] top-0 z-1 hidden sm:block '></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[66%] top-0 z-1 hidden lg:block'></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[73%] top-0 z-1'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[79%] top-0 z-1 hidden lg:block'></div>
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[85%] top-0 z-1 hidden sm:block '></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute left-[92%] top-0 z-1 hidden lg:block'></div> 
            <div className='h-full w-4 bg-cyan-700/5 absolute right-0 top-0 z-1'></div>
        </div>
    )
}

export default Stripes