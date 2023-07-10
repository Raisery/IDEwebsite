'use client'

import Dropdown from '@/components/Dropdown/Dropdown'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import orangeFolder from '../../assets/img/orange-folder.svg'
import blueFolder from '../../assets/img/blue-folder.svg'
import greenFolder from '../../assets/img/green-folder.svg'
import chevron from '../../assets/img/chevron.svg'
import Image from 'next/image'
import aboutMe from '../../assets/datas/aboutMe.json'
import { dropDownFactory } from '@/utils/factories'

export default function About() {
    return (
        <div className="w-full h-full flex flex-col justify-between overflow-hidden relative bg-[#000077]/5">
            <Header pagePath="About" pageName="_about-me" />
            <div className="w-full h-full relative flex flex-col gap-1">
                {dropDownFactory(aboutMe)}
            </div>
            <Footer />
        </div>
    )
}
