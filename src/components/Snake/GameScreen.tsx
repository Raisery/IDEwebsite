'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInterval } from '@/utils/useInterval'
import SnakeModel from './SnakeModel'
import snakeHead from '../../assets/snake-head.svg'
import Image from 'next/image'

const gameWidth = 240
const gameHeight = 400
const timeDelay = 10
const block = 20

type GameScreenProps = {
    width: number
    height: number
    setFoodList: (index: number) => void
    foodList: JSX.Element[] | null
}

function GameScreen({ width, height, setFoodList, foodList }: GameScreenProps) {
    const [messagesVisible, setMessagesVisible] = useState(true)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [snake, setSnake] = useState(new SnakeModel(block))
    const [delay, setDelay] = useState<number | null>(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleOnKeyDown(event: KeyboardEvent) {
        document.removeEventListener('keydown', (e) => handleOnKeyDown(e))
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
        }
    }

    useInterval(() => startGame(), delay)
    useEffect(() => {
        document.addEventListener('keydown', handleOnKeyDown)
    }, [handleOnKeyDown])

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
            snake.decreaseFood()
            setFoodList(snake.foodLeft - 1)
            return true
        }
        return false
    }

    function play() {
        setDelay(timeDelay)
        setMessagesVisible(false)
    }

    function update() {
        const foodUp = document.getElementById('foodUp') as HTMLCanvasElement
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
            setMessagesVisible(true)
            setSnake(new SnakeModel(block))
        }
        if (!foodAte(newSnake) && !snake.isDigesting()) {
            newSnake.pop()
        }
        snake.setSnake(newSnake)
        update()
    }

    return (
        <div>
            <Image
                id="snake-head"
                className="absolute w-0 h-0"
                src={snakeHead}
                alt="snake head"
            ></Image>
            <canvas ref={canvasRef} width={width} height={height}></canvas>
            <button
                className={
                    (messagesVisible ? 'absolute ' : 'hidden ') +
                    'top-[25%] left-[50%] translate-x-[-50%] border p-2 z-20'
                }
                onClick={play}
            >
                Start game
            </button>
        </div>
    )
}

export default GameScreen
