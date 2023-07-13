import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import githubSvg from '../../assets/img/github.svg'
import twitterSvg from '../../assets/img/twitter.svg'
import facebookSvg from '../../assets/img/facebook.svg'

type FooterProps = {
    hiddenOnSmallScreen?: boolean
}

function Footer({ hiddenOnSmallScreen = false }: FooterProps) {
    return (
        <footer
            className={
                (hiddenOnSmallScreen ? 'hidden md:flex ' : 'flex ') +
                'h-12 justify-between text-[#607B96] border border-[#1E2D3D]/70 rounded-b-lg border-t-transparent'
            }
        >
            <div className="flex items-center h-full text-[#607B96]">
                <p className="flex border-r  border-[#1E2D3D]/70 px-4 py-2 md:w-auto h-full items-center">
                    find me in:
                </p>
                <Link
                    className="p-3 w-16 flex items-center md:px-4 md:py-2 border-r  border-[#1E2D3D]/70 h-full"
                    href="#"
                >
                    <Image
                        className="h-full w-full"
                        src={twitterSvg}
                        alt="twitter"
                    ></Image>
                </Link>
                <Link
                    className="p-3 w-16 flex items-center md:border-r  border-[#1E2D3D]/70 md:px-4 md:py-2 h-full"
                    href="#"
                >
                    <Image
                        className="h-full w-full"
                        src={facebookSvg}
                        alt="facebook"
                    ></Image>
                </Link>
            </div>
            <Link
                className={
                    'h-full p-3 w-16 flex items-center -mr-2 border-l border-[#1E2D3D]/70 text-[#607B96] ' +
                    ' md:px-4 md:py-2 md:w-auto'
                }
                href="https://github.com/Raisery"
            >
                <span className=" hidden md:block">@Raisery</span>
                <Image
                    className="md:ml-2"
                    src={githubSvg}
                    alt="twitter"
                ></Image>
            </Link>
        </footer>
    )
}

export default Footer
