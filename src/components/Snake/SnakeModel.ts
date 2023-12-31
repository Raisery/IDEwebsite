'use client'

export default class SnakeModel {
    snake: number[][]
    food: number[]
    direction: number[]
    delay: number | null
    gameOver: boolean
    finish: boolean
    foodLeft: number
    nextDirection: number[] | null
    block: number
    lenght: number
    digesting: number

    constructor(block: number) {
        this.snake = [
            [block * 2, block * 2],
            [block * 2, block * 2 - 1],
        ]
        this.food = [80, 240]
        this.direction = [0, 1]
        this.delay = null
        this.gameOver = false
        this.finish = false
        this.foodLeft = 10
        this.nextDirection = null
        this.block = block
        this.digesting = block
        this.lenght = 2
    }

    setSnake(newSnake: number[][]) {
        this.snake = newSnake
        //we change the direction only if the head is on a valid block
        if (
            this.snake[0][0] % this.block === 0 &&
            this.snake[0][1] % this.block === 0 &&
            this.nextDirection
        ) {
            //test if the next direction is not the opposite direction
            const Xs = this.direction[0] + this.nextDirection[0]
            const Ys = this.direction[1] + this.nextDirection[1]
            if (Xs === 0 && Ys === 0) this.nextDirection = null
            else {
                this.direction = this.nextDirection
                this.nextDirection = null
            }
        }
        if (this.digesting) this.digesting--
    }

    isDigesting(): boolean {
        if (this.digesting) return true
        else return false
    }

    changeDirection(newDirection: number[]) {
        this.nextDirection = newDirection
    }

    setFood(newFood: number[]) {
        this.food = newFood
    }

    setDelay(newDelay: number | null) {}

    toggleGameOver() {
        this.gameOver = !this.gameOver
    }

    toggleFinish() {
        this.finish = !this.finish
    }

    decreaseFood() {
        this.foodLeft--
        this.digesting += this.block
        this.lenght++
    }
}
