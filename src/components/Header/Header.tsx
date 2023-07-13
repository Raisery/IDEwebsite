'use client'

import React, { SyntheticEvent, useState } from 'react'
import menuSvg from '../../assets/img/menu.svg'
import closeSvg from '../../assets/img/cross.svg'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Footer/Footer'
import Stripes from '../Stripes/Stripes'

type Props = {
    pagePath: string
    pageName?: string
}

type PropsMenu = {
    isActive: boolean
}

const Header = ({ pagePath, pageName }: Props) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    // change border to after for the active display on menu
    function handleMenu(event: SyntheticEvent) {
        setIsMenuActive(!isMenuActive)
    }

    const Button = () => {
        return (
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
        )
    }

    const Options = () => {
        return (
            <div className="h-full hidden md:flex items-center w-[80%] justify-between">
                <div className="h-full flex">
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D]/70 items-center ' +
                            (pagePath === 'Home'
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
                            (pagePath === 'About'
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
                            (pagePath === 'Projects'
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
        )
    }

    const Banner = () => {
        return (
            <div>
                <div
                    id="header-banner"
                    className={
                        'w-full h-14 px-4 flex justify-between ' +
                        'md:justify-start ' +
                        'border-b border-b-[#1E2D3D]/70 '
                    }
                >
                    <p
                        id="header-banner__label"
                        className={
                            'flex items-center min-w-[20%] ' +
                            'md:border-r md:border-r-[#1E2D3D]/70 '
                        }
                    >
                        lucas-gerard
                    </p>
                    <Button />
                    <Options />
                </div>
            </div>
        )
    }

    const Menu = () => {
        return (
            <div
                className={
                    'absolute z-50 top-0 right-0 left-0 h-screen flex flex-col justify-between bg-[#010C15] p-4 border border-transparent'
                }
            >
                <div className="flex flex-col relative h-full border border-[#1E2D3D]/70 rounded-lg">
                    <div className="h-full border-b border-b-[#1E2D3D]/70">
                        <Stripes />
                        <Banner />
                        <div className="w-full flex flex-col text-white/80">
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
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
    return (
        <nav
            className={
                'text-base text-[#607B96] bg-[#010C15] border border-[#1E2D3D]/70 rounded-t-lg'
            }
        >
            {isMenuActive ? <Menu /> : <Banner />}
            <div
                className={
                    ' h-16 flex items-center pl-8 ' +
                    'md:hidden ' +
                    (pageName ? '' : 'hidden ')
                }
            >
                <p className="text-white">{pageName}</p>
            </div>
        </nav>
    )
}

export default Header
