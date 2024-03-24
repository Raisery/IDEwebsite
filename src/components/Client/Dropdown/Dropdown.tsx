'use client';

import Image from 'next/image';
import React, { useState, MouseEvent } from 'react';
import triangleSvg from '@/assets/img/triangle.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type DropdownProps = {
    children?: React.ReactNode | null;
    title: string | React.ReactNode;
    className?: string | null;
    highlight?: boolean;
    indicator?: string | StaticImport;
    hover?: boolean;
    active?: boolean;
    id?: string | undefined;
    onClick?: any;
};

export default function Dropdown({
    children = null,
    title,
    className,
    highlight = false,
    indicator = triangleSvg,
    hover = false,
    active = false,
    id = undefined,
    onClick = undefined,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(active);
    function handleToggleDropdown(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(!isOpen);
        if (onClick) onClick(id);
    }
    return (
        <div className="w-full relative flex flex-col ">
            <button
                className={
                    'pl-6 h-8 flex items-center ' +
                    (hover ? ' hover:bg-[#fff]/25 text-white ' : '') +
                    (highlight ? 'bg-[#1E2D3D] ' : '')
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
    );
}
