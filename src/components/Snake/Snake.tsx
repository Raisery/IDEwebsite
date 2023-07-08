'use client'

import React, { useState } from 'react'
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
import GameScreen from './GameScreen'

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Snake() {
    const [foodLeft, setFoofLeft] = useState(10)

    function Container({ children }: Props) {
        return (
            <div className="w-full h-full relative p-[40px] border border-[#114944] rounded-lg flex overflow-hidden bg-gradient-to-b from-[#43D9AD]/0 to-[#010C15]/20">
                <Image
                    className="absolute top-[10px] left-[10px]"
                    src={topLNail}
                    alt="nail"
                ></Image>
                <Image
                    className="absolute top-[10px] right-[10px]"
                    src={topRNail}
                    alt="nail"
                ></Image>
                <Image
                    className="absolute bottom-[10px] right-[10px]"
                    src={bottomRNail}
                    alt="nail"
                ></Image>
                <Image
                    className="absolute bottom-[10px] left-[10px]"
                    src={bottomLNail}
                    alt="nail"
                ></Image>
                {children}
            </div>
        )
    }

    function Panel() {
        return (
            <div>
                <div className=" h-full">
                    <div className="flex flex-col w-full bg-[#011423]/20 rounded-lg mb-4 pt-4 relative justify-between">
                        <div>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-white text-sm px-4">
                                // use keyboard
                            </p>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-white text-sm px-4">
                                // arrow to play
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-end mt-4 bottom-0 mb-4 mx-auto">
                            <Image
                                className=""
                                src={leftArrow}
                                alt="left arrow"
                            ></Image>
                            <div className="flex h-full items-center flex-col">
                                <Image
                                    className="mb-1"
                                    src={upArrow}
                                    alt="up arrow"
                                ></Image>
                                <Image
                                    className=""
                                    src={downArrow}
                                    alt="down arrow"
                                ></Image>
                            </div>

                            <Image
                                className=""
                                src={rightArrow}
                                alt="right arrow"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function FoodPanel() {
        const foodlist = []

        for (let i = 0; i < foodLeft; i++) {
            foodlist.push(<Food key={i} isReady={true} />)
        }
        return (
            <div>
                <div className="pl-4">
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p className="text-white text-sm">// food left</p>
                    <div className="flex flex-wrap gap-2 w-[90%] mt-2">
                        {foodlist}
                    </div>
                </div>
            </div>
        )
    }

    function GameView({ children }: Props) {
        return (
            <div className="flex-auto w-[240px] h-[400px] rounded-md relative after:content-[' '] after:absolute after:rounded-md after:top-0 after:left-0 after:right-0 after:bottom-0 after:shadow-max shadow-inside shadow-[#011627]/90">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <Container>
            <GameView>
                <GameScreen width={240} height={400} />
            </GameView>
            <div className="w-[40%] flex flex-col ml-4 items-center justify-start">
                <Panel />
                <FoodPanel />
                <button className="flex border rounded-lg bg-transparent text-white justify-center mt-auto p-2 text-sm self-end">
                    skip
                </button>
            </div>
        </Container>
    )
}
