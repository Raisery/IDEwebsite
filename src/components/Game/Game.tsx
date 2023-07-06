'use client'

import React, { createElement } from 'react'
import Image from 'next/image'
import nailSvg from '../../assets/nail.svg'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import Food from '../Food/Food'

const Game = () => {
  return (
    <div className='w-full h-full relative p-[30px] border border-[#114944] rounded-lg bg-gradient-to-b from-[#43D9AD]/20 to-[#010C15]/20 flex gap-[5%] '>
        <Image className='absolute top-[10px] left-[10px]' src={nailSvg} alt='nail'></Image>
        <Image className='absolute top-[10px] right-[10px]' src={nailSvg} alt='nail'></Image>
        <Image className='absolute bottom-[10px] right-[10px]' src={nailSvg} alt='nail'></Image>
        <Image className='absolute bottom-[10px] left-[10px]' src={nailSvg} alt='nail'></Image>
        <div className='w-[50%] h-full rounded-md bg-[#011627]/20'></div>
        <div className='w-[43%] h-full'>
            <div className='w-full bg-[#011423]/20 rounded-lg mb-4 p-4 ' >
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='text-white text-sm'>// use keyboard</p>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='text-white text-sm'>// arrow to play</p>
                <div className='w-full h-[100%] flex gap-2 justify-center items-end mt-4'>
                    <Image src={leftArrow} alt='left arrow'></Image>
                    <div className='h-full flex flex-col gap-2'>
                        <Image src={upArrow} alt='up arrow'></Image>
                        <Image src={downArrow} alt='down arrow'></Image> 
                    </div>
                    <Image src={rightArrow} alt='right arrow'></Image>
                </div>
            </div>
            <div className='pl-4'>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='text-white text-sm'>// food left</p>
                <div>
                    food
                </div>
            </div>
        </div>
    </div>
  )
}

//Generating the food stack
function generateFood(quantity: number){
   
}

export default Game