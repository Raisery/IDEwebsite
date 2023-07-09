'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import SnakeModel from './SnakeModel'
import { useInterval } from '@/utils/useInterval'
import snakeHead from '../../assets/snake-head.svg'
import foodSvg from '../../assets/food-up.svg'

const gameWidth = 240
const gameHeight = 400
const timeDelay = 10
const block = 20

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Snake() {
    const list: JSX.Element[] = []
    for (let i = 0; i < 10; i++) [list.push(<Food key={i} isReady={true} />)]
    const [displayPlayButton, setdisplayPlayButton] = useState(true)
    const [displayCongratMessage, setDisplayCongratMessage] = useState(false)
    const [displayGameOver, setDisplayGameOver] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [snake, setSnake] = useState(new SnakeModel(block))
    const [delay, setDelay] = useState<number | null>(null)
    const [foodList, setFoodList] = useState(list)
    const [playing, setPlaying] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleOnKeyDown(event: KeyboardEvent) {
        document.removeEventListener('keydown', (e) => handleOnKeyDown(e))
        console.log(event.key)
        switch (event.key) {
            case 'ArrowLeft':
                event.stopPropagation()
                event.preventDefault()
                snake.changeDirection([-1, 0])
                break
            case 'ArrowUp':
                snake.changeDirection([0, -1])
                event.stopPropagation()
                event.preventDefault()
                break
            case 'ArrowRight':
                snake.changeDirection([1, 0])
                event.stopPropagation()
                event.preventDefault()
                break
            case 'ArrowDown':
                snake.changeDirection([0, 1])
                event.stopPropagation()
                event.preventDefault()
                break
            case ' ':
                play()
        }
    }

    useInterval(() => startGame(), delay)

    //stop the interval hook to refresh the foodList
    if (playing && !delay) {
        setDelay(timeDelay)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleOnKeyDown)
    }, [handleOnKeyDown, foodList])

    function isThereCollision(head: number[]) {
        if (head[0] < 0 || head[0] >= gameWidth) return true
        if (head[1] < 0 || head[1] >= gameHeight) return true

        for (let part of snake.snake) {
            if (head[0] === part[0] && head[1] === part[1]) return true
        }

        return false
    }

    function foodAte(currentSnake: number[][]) {
        let position = [
            Math.floor(Math.random() * (gameWidth / block)) * block,
            Math.floor(Math.random() * (gameHeight / block)) * block,
        ]
        if (
            currentSnake[0][0] === snake.food[0] &&
            currentSnake[0][1] === snake.food[1]
        ) {
            let newFood = position
            snake.setFood(newFood)
            foodList.push(<Food key={10 + snake.foodLeft} isReady={false} />)
            foodList.shift()
            setFoodList(foodList)
            snake.decreaseFood()
            setDelay(null)
            return true
        }
        return false
    }

    function play() {
        setDelay(timeDelay)
        setdisplayPlayButton(false)
        setFoodList(list)
        setPlaying(true)
        setDisplayGameOver(false)
        setDisplayCongratMessage(false)
    }

    function update() {
        const foodUp = document.getElementById('food') as HTMLCanvasElement
        const snakeBody = document.getElementById(
            'snake-head'
        ) as HTMLCanvasElement
        const context = canvasRef.current?.getContext('2d')

        if (context) {
            context.clearRect(0, 0, gameWidth, gameHeight)
            let r_a = 1

            snake.snake.forEach(([x, y]) => {
                context.drawImage(snakeBody, x, y, block, block)
                r_a -= 0.05
            })
            context.fillStyle = 'green'
            context.drawImage(
                foodUp,
                snake.food[0],
                snake.food[1],
                block,
                block
            )
        }
    }

    function startGame() {
        const newSnake = [...snake.snake]

        const newHead = [
            newSnake[0][0] + snake.direction[0],
            newSnake[0][1] + snake.direction[1],
        ]
        newSnake.unshift(newHead)
        if (isThereCollision(newHead)) {
            setDelay(null)
            snake.toggleGameOver()
            setdisplayPlayButton(true)
            setDisplayGameOver(true)
            setSnake(new SnakeModel(block))
            setPlaying(false)
        }
        if (!foodAte(newSnake) && !snake.isDigesting()) {
            newSnake.pop()
        }

        if (snake.foodLeft === 0) {
            setDelay(null)
            setDisplayCongratMessage(true)
            setdisplayPlayButton(true)
            setSnake(new SnakeModel(block))
            setPlaying(false)
        }
        snake.setSnake(newSnake)
        update()
    }

    return (
        <div className="w-full h-full relative p-[40px] border border-[#114944] rounded-lg flex overflow-hidden bg-gradient-to-b from-[#43D9AD]/0 to-[#010C15]/20">
            <div>
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
                <Image
                    className="w-0 absolute"
                    id="food"
                    src={foodSvg}
                    alt="food"
                />
            </div>

            <div className="flex-auto w-[240px] h-[400px] rounded-md relative after:content-[' '] after:absolute after:rounded-md after:top-0 after:left-0 after:right-0 after:bottom-0 after:shadow-max shadow-inside shadow-[#011627]/90">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <div>
                        <Image
                            id="snake-head"
                            className="absolute w-0 h-0"
                            src={snakeHead}
                            alt="snake head"
                        ></Image>
                        <canvas
                            ref={canvasRef}
                            width={gameWidth}
                            height={gameHeight}
                        ></canvas>
                        <button
                            className={
                                (displayPlayButton ? 'absolute ' : 'hidden ') +
                                'top-[25%] left-[50%] translate-x-[-50%] border p-2 z-20'
                            }
                            onClick={play}
                        >
                            Start game
                        </button>
                        <span
                            className={
                                (displayCongratMessage
                                    ? 'absolute '
                                    : 'hidden ') +
                                'top-[40%] left-[50%] translate-x-[-50%] text-lg text-center z-20'
                            }
                        >
                            Congratulation !!!
                        </span>
                        <span
                            className={
                                (displayGameOver ? 'absolute ' : 'hidden ') +
                                'top-[40%] left-[50%] translate-x-[-50%] text-lg z-20'
                            }
                        >
                            Game Over
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[40%] flex flex-col ml-4 items-center justify-start">
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
                <div>
                    <div className="pl-4">
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <p className="text-white text-sm">// food left</p>
                        <div className="flex flex-wrap gap-2 w-[90%] mt-2">
                            {foodList}
                        </div>
                    </div>
                </div>
                <button className="flex border rounded-lg bg-transparent text-white justify-center mt-auto p-2 text-sm self-end">
                    skip
                </button>
            </div>
        </div>
    )
}
