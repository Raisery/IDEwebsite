import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Image from 'next/image'
import Stripes from '../Stripes/Stripes'

type ContainerProps = {
    children?: ReactNode
    pageName?: string
    pagePath: string
    footerHiddenOnSmallScreen?: boolean
}

export default function Container({
    children,
    pagePath,
    pageName,
    footerHiddenOnSmallScreen = false,
}: ContainerProps) {
    return (
        <div className="flex flex-col p-4 w-full min-h-screen border border-transparent">
            <Header pageName={pageName} pagePath={pagePath} />
            <div
                className={
                    'border border-[#1E2D3D]/70 h-full ' +
                    (footerHiddenOnSmallScreen ? '' : 'rounded-b-lg')
                }
            >
                {children}
            </div>
            <Stripes />
            <Footer hiddenOnSmallScreen={footerHiddenOnSmallScreen} />
        </div>
    )
}
