import React, { createElement, useState } from 'react'
import foodUp from '../../assets/food-up.svg'
import foodDown from '../../assets/food-down.svg'
import Image from 'next/image'

type Props = {
    isReady: boolean
}

export default function Food({ isReady }: Props) {
    const [isUp, setIsUp] = useState(isReady)
    let foodUpClass = 'hidden'
    let foodDownClass = ''
    if (isUp) {
        foodDownClass = 'hidden'
        foodUpClass = ''
    }
    return (
        <div>
            <Image
                id="foodUp"
                className={foodUpClass}
                src={foodUp}
                alt="food"
            ></Image>
            <Image className={foodDownClass} src={foodDown} alt="food"></Image>
        </div>
    )
}
