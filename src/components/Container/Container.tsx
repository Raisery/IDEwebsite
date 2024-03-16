'use client';

import React, { ReactNode, useState } from 'react';

type ContainerProps = {
    children?: ReactNode;
    className?: string;
};

export default function Container({ children }: ContainerProps) {
    return (
        <div
            className={
                'flex flex-col w-full h-full overflow-y-auto border-y border-[#1E2D3D] tablet:' +
                '' /*shadow-[10px_0_60px_80px_rgba(1,12,21,0.95)] */
            }
        >
            {children}
        </div>
    );
}
