import React, { createElement, useState } from 'react'
import foodUp from '../../assets/food-up.svg'
import foodDown from '../../assets/food-down.svg'
import Image from 'next/image'

export default function Food() {
    const [isUp, setIsUp] = useState(true)
    let foodUpClass = ""
    let foodDownClass = "hidden"

    if(isUp) {
        foodDownClass = ""
        foodUpClass = "hidden"
    }
  return (
    <div>
        <Image className={foodUpClass} src={foodUp} alt='food'></Image>
        <Image className={foodDownClass} src={foodDown} alt='food'></Image>
    </div>
  )
}
