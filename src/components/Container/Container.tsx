'use client'

import React, { ReactNode, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
    const [isMenuActive, setIsMenuActive] = useState(false)

    const Content = () => (
        <div className="flex flex-col h-full">
            <div
                className={
                    'border border-[#1E2D3D]/70 h-full ' +
                    (footerHiddenOnSmallScreen ? 'rounded-b-lg' : '')
                }
            >
                {children}
            </div>
            <Footer hiddenOnSmallScreen={footerHiddenOnSmallScreen} />
        </div>
    )

    return (
        <div className="p-4 flex min-h-screen w-full">
            <div className="flex flex-col w-full bg-[#011627]/95 border border-transparent shadow-[10px_0_60px_80px_rgba(1,12,21,0.95)]">
                <Header
                    pageName={pageName}
                    pagePath={pagePath}
                    onMenuActive={setIsMenuActive}
                />
                {isMenuActive ? '' : <Content />}
            </div>
        </div>
    )
}
