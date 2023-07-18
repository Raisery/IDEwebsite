'use client'

import Image from 'next/image'
import React, {
    PropsWithChildren,
    useState,
    MouseEvent,
    useEffect,
} from 'react'
import triangleSvg from '../../assets/img/triangle.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type DropdownProps = {
    children?: React.ReactNode | null
    title: string | React.ReactNode
    className?: string | null
    indicator?: string | StaticImport
    hover?: boolean
    active?: boolean
    id?: string | undefined
    onClick?: any
}

export default function Dropdown({
    children = null,
    title,
    className,
    indicator = triangleSvg,
    hover = false,
    active = false,
    id = undefined,
    onClick = undefined,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(active)
    console.log(active + ' ' + title)
    function handleToggleDropdown(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        setIsOpen(!isOpen)
        if (onClick) onClick(id)
    }
    return (
        <div className="w-full relative flex flex-col">
            <button
                className={
                    'pl-6 h-8 flex items-center' +
                    (hover ? ' bg-[#fff]/10 hover:bg-[#fff]/25' : '')
                }
                onClick={handleToggleDropdown}
                id={id}
            >
                <Image
                    src={indicator}
                    alt="dropdown indicator"
                    className={(isOpen ? ' rotate-90' : '') + ' h-auto mr-4 '}
                />
                {title}
            </button>

            <div className={isOpen ? 'block' : 'hidden'}>
                <div className={className ? className : ''}>{children}</div>
            </div>
        </div>
    )
}
