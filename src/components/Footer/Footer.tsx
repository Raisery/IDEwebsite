import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import githubSvg from '../../assets/img/github.svg'
import twitterSvg from '../../assets/img/twitter.svg'
import facebookSvg from '../../assets/img/facebook.svg'

function Footer({ ignoreResponsive = false }) {
    return (
        <div
            className={
                (ignoreResponsive ? 'flex' : 'hidden') +
                ' md:flex h-[50px] justify-between text-[#607B96] border-t border-[#1E2D3D]/70'
            }
        >
            <div className="flex items-center w-full">
                <p className="border-r  border-[#1E2D3D]/70 px-4 py-2 w-full md:w-auto">
                    find me in:
                </p>
                <Link
                    className="p-3 flex items-center border-r  border-[#1E2D3D]/70 md:px-4 md:py-2"
                    href="#"
                >
                    <Image src={twitterSvg} alt="twitter"></Image>
                </Link>
                <Link
                    className="p-3 flex items-center border-r  border-[#1E2D3D]/70 md:px-4 md:py-2"
                    href="#"
                >
                    <Image src={facebookSvg} alt="facebook"></Image>
                </Link>
            </div>
            <Link
                className="p-3 flex items-center md:px-4 md:py-2 border-l border-[#1E2D3D]/70 "
                href="https://github.com/Raisery"
            >
                <span className=" hidden md:block">@Raisery</span>
                <Image
                    className="md:ml-2"
                    src={githubSvg}
                    alt="twitter"
                ></Image>
            </Link>
        </div>
    )
}

export default Footer
