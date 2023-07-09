'use client'

import React, { SyntheticEvent, useState } from 'react'
import menuSvg from '../../assets/menu.svg'
import closeSvg from '../../assets/cross.svg'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Footer/Footer'
import Stripes from '../Stripes/Stripes'

type Props = {
    page: String
}

type PropsMenu = {
    isActive: boolean
}

const Header = ({ page }: Props) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    // change border to after for the active display on menu
    function handleMenu(event: SyntheticEvent) {
        setIsMenuActive(!isMenuActive)
    }

    return (
        <nav
            className={
                (isMenuActive ? 'absolute top-0 bottom-0 ' : '-mb-[55px]') +
                ' w-full flex flex-col text-base text-[#607B96] z-10 bg-[#010C15] bg-transparent'
            }
        >
            {isMenuActive ? <Stripes /> : ''}
            <div className="w-full h-full">
                <div className=" md:justify-start h-[55px] w-full px-[18px] flex justify-between border-b border-b-[#1E2D3D]/70">
                    <p className="flex items-center min-w-[20%] md:border-r border-r-[#1E2D3D]/70 ">
                        lucas-gerard
                    </p>
                    <button className="md:hidden w-[16px]" onClick={handleMenu}>
                        <Image
                            className={isMenuActive ? 'hidden' : ''}
                            src={menuSvg}
                            alt="menu"
                        ></Image>
                        <Image
                            className={isMenuActive ? '' : 'hidden'}
                            src={closeSvg}
                            alt="close"
                        ></Image>
                    </button>
                    <div className="h-full hidden md:flex items-center w-[80%] justify-between">
                        <div className="h-full flex">
                            <Link
                                className={
                                    'h-full flex px-4 border-r border-r-[#1E2D3D]/70 items-center ' +
                                    (page === 'Home'
                                        ? 'border-b border-b-[#FEA55F]'
                                        : '')
                                }
                                href="/"
                            >
                                _hello
                            </Link>
                            <Link
                                className={
                                    'h-full flex px-4 border-r border-r-[#1E2D3D]/70 items-center ' +
                                    (page === 'About'
                                        ? 'border-b border-b-[#FEA55F]'
                                        : '')
                                }
                                href="/About"
                            >
                                _about-me
                            </Link>
                            <Link
                                className={
                                    'h-full flex px-4 border-r border-r-[#1E2D3D]/70 items-center ' +
                                    (page === 'Projects'
                                        ? 'border-b border-b-[#FEA55F]'
                                        : '')
                                }
                                href="/Projects"
                            >
                                _projects{' '}
                            </Link>
                        </div>

                        <Link
                            className="h-full flex pl-4 border-l border-l-[#1E2D3D]/70 items-center"
                            href="/Contact"
                        >
                            _contact-me
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        (isMenuActive ? 'block' : 'hidden') +
                        ' w-full h-full pb-[55px]'
                    }
                >
                    <Menu isActive={isMenuActive} />
                </div>
            </div>
        </nav>
    )
}

function Menu({ isActive }: PropsMenu) {
    return (
        <div
            className={
                (isActive ? '' : 'hidden') +
                ' w-full h-full flex flex-col justify-between'
            }
        >
            <div className="h-full w-full flex flex-col text-white/80">
                <Link
                    className="h-[55px] border-b  border-b-[#1E2D3D]/70 pl-[18px] flex items-center"
                    href="/"
                >
                    _hello
                </Link>
                <Link
                    className="h-[55px] border-b  border-b-[#1E2D3D]/70 pl-[18px] flex items-center"
                    href="/About"
                >
                    _about-me
                </Link>
                <Link
                    className="h-[55px] border-b  border-b-[#1E2D3D]/70 pl-[18px] flex items-center"
                    href="/Projects"
                >
                    _projects
                </Link>
                <Link
                    className="h-[55px] border-b  border-b-[#1E2D3D]/70 pl-[18px] flex items-center"
                    href="/Contact"
                >
                    _contact-me
                </Link>
            </div>
            <Footer ignoreResponsive={true} />
        </div>
    )
}

export default Header
