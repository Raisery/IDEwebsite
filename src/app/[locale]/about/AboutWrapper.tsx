'use client';

import DropDownMenu from '@/components/Client/Dropdown/DropdownMenu';
import AboutContent from './AboutContent';
import { useState } from 'react';

export default function AboutWrapper() {
    const [currentDropDown, setCurrentDropDown] = useState('0');
    return (
        <>
            <div className="w-full h-[20%] overflow-y-auto border-b-[3px] border-[#1E2D3D] scrollbar-custom smartphone_landscape:h-auto smartphone_landscape:border-b-0 smartphone_landscape:w-[50%] smartphone_landscape:border-r-[5px] laptop:w-[25%] laptop:h-full laptop:border-b-0 laptop:border-r-[5px]">
                <DropDownMenu
                    setCurrentDropDown={setCurrentDropDown}
                    currentDropDown={currentDropDown}
                />
            </div>

            {/*generate dynamic content
                        <AboutContent data={translation}*/}
            <div className="w-full h-[80%] overflow-y-auto p-4 smartphone_landscape:h-auto smartphone_landscape:w-full laptop:w-[75%] laptop:h-full">
                <AboutContent currentDropDown={currentDropDown} />
            </div>
        </>
    );
}
