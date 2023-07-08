'use client'

import React, { Children, createElement } from 'react'
import Image from 'next/image'
import topLNail from '../../assets/tl-nail.svg'
import bottomRNail from '../../assets/br-nail.svg'
import topRNail from '../../assets/tr-nail.svg'
import bottomLNail from '../../assets/bl-nail.svg'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import Food from '../Food/Food'


type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const Game = () => {
  return (
    <Container>
        <GameView />
        <div className='w-[40%] flex flex-col ml-4'>
           <Panel />
           <FoodPanel />
        </div>
    </Container> 
    
  )
}

const Container = ({children} : Props) => {
  return (
    <div className="w-full h-full relative p-[30px] border border-[#114944] rounded-lg flex overflow-hidden bg-gradient-to-b from-[#43D9AD]/0 to-[#010C15]/20">
        <Image className='absolute top-[10px] left-[10px]' src={topLNail} alt='nail'></Image>
        <Image className='absolute top-[10px] right-[10px]' src={topRNail} alt='nail'></Image>
        <Image className='absolute bottom-[10px] right-[10px]' src={bottomRNail} alt='nail'></Image>
        <Image className='absolute bottom-[10px] left-[10px]' src={bottomLNail} alt='nail'></Image>
        {children}
        
    </div>
  )
}


const Panel = () => {
  return (
    <div>
        <div className=' h-full'>
            <div className='flex flex-col w-full bg-[#011423]/20 rounded-lg mb-4 p-4 relative' >
                <div>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p className='text-white text-sm'>// use keyboard</p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p className='text-white text-sm'>// arrow to play</p> 
                </div>           
                <div className='w-full flex justify-center items-end mt-4 bottom-0 mb-4 mx-auto'>
                    <Image className='w-[60px]' src={leftArrow} alt='left arrow'></Image>
                    <div className='w-[60px] flex items-center flex-col'>
                        <Image className='w-full mb-1' src={upArrow} alt='up arrow'></Image>
                        <Image className='w-full'src={downArrow} alt='down arrow'></Image> 
                    </div>
                    <Image className='w-[60px]' src={rightArrow} alt='right arrow'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

const FoodPanel = () => {
    const foodlist = []

    for(let i = 0; i<10 ; i++) {
        foodlist.push(<Food key={i} isReady={true} />)
    }
  return (
    <div><div className='pl-4'>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='text-white text-sm'>// food left</p>
                <div className='flex flex-wrap gap-2 w-[60%] mt-2'>
                     {foodlist}
                </div>
            </div></div>
  )
}

const GameView = () => {
  return (<div className="flex-auto min-w-[50%] h-full rounded-md relative after:content-[' '] after:absolute after:rounded-md after:top-0 after:left-0 after:right-0 after:bottom-0 after:shadow-max shadow-inside shadow-[#011627]/90" ></div>
  )
}

export default Game