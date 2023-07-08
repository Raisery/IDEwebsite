'use client'

import Game from '@/components/Snake/Snake'
import Header from '@/components/Header/Header'
import Link from 'next/link'
import radialBg from '../assets/radial-bg.svg'
import minRadialBg from '../assets/min-radial-bg.svg'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <div className="w-full h-full text-[#E5E9F0] flex flex-col overflow-hidden relative">
            <Header page="Home" />
            <div className="w-full h-full m-0 p-0 place-self-center relative flex flex-col justify-center xl:max-w-[1280px] 2xl:max-w-[1500px] ">
                <div className="p-[27px] mt-[20%] md:mt-0 lg:max-w-[45%] lg:m-0 relative">
                    <Image
                        className="absolute md:hidden max-w-none translate-x-[-20%] translate-y-[-20%]"
                        src={minRadialBg}
                        alt="background"
                    ></Image>
                    <p className="text-base font-light tracking-wider">
                        Hi all. I am
                    </p>
                    <h1 className="text-7xl font-light">Lucas Gerard</h1>
                    <p className="text-[#43D9AD] text-xl text-light">
                        &gt; Front-end developer
                    </p>
                </div>
                <div className="hidden md:flex w-[510px] mx-auto h-[475px] lg:flex-row lg:absolute lg:right-[5%] lg:top-[50%] lg:translate-y-[-50%]">
                    <Image
                        className=" translate-x-[-20%] translate-y-[-25%] max-w-none absolute hidden md:block"
                        src={radialBg}
                        alt="background"
                    ></Image>
                    <Game />
                </div>
                <Github />
            </div>
            <Footer />
        </div>
    )
}

const Github = () => {
    return (
        <div className="p-[27px] mt-[30%] md:mt-0">
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="text-[#607B96] text-sm md:hidden">
                // find my profile on Github:
            </p>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="text-[#607B96] text-sm hidden md:block">
                // complete the game to continue
            </p>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="text-[#607B96] text-sm hidden md:block">
                // you can also see it on my Github page
            </p>
            <p className="mt-[12px] text-sm">
                <span className="text-[#4D5BCE]">const </span>
                <span className="text-[#43D9AD]">githubLink </span> =
                <Link
                    className="text-[#E99287]"
                    href="https://github.com/Raisery"
                >
                    {' '}
                    https://
                </Link>
            </p>
            <Link
                className="text-sm text-[#E99287]"
                href="https://github.com/Raisery"
            >
                github.com/Raisery
            </Link>
        </div>
    )
}
