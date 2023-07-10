'use client'

import Image from 'next/image'
import React, { PropsWithChildren, useState, MouseEvent } from 'react'
import triangleSvg from '../../assets/img/triangle.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type DropdownProps = {
    children?: React.ReactNode | null
    title: string | React.ReactNode
    className?: string | null
    indicator?: string | StaticImport
    hover?: boolean
}

function Dropdown({
    children = null,
    title,
    className,
    indicator = triangleSvg,
    hover = false,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)

    function handleToggleDropdown(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        event.stopPropagation()
        setIsOpen(!isOpen)
    }
    return (
        <div className="w-full relative flex flex-col">
            <button
                className={
                    'pl-6 h-8 flex items-center' +
                    (hover ? ' bg-[#fff]/10 hover:bg-[#fff]/25' : '')
                }
                onClick={(e) => handleToggleDropdown(e)}
            >
                <Image
                    src={indicator}
                    alt="dropdown indicator"
                    className={(isOpen ? ' rotate-90' : '') + ' mr-4 '}
                />
                {title}
            </button>

            <div className={isOpen ? 'block' : 'hidden'}>
                <div className={className ? className : ''}>{children}</div>
            </div>
        </div>
    )
}

export default Dropdown
