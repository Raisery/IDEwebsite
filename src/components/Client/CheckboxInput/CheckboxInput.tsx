'use client';

import { useState } from 'react';
import checkedSvg from '@/assets/img/checkedSvg.svg';
import uncheckedSvg from '@/assets/img/uncheckedSvg.svg';

import Image from 'next/image';

type CheckBoxInputType = {
    checked?: boolean;
    name: string;
    imgSrc?: typeof checkedSvg;
    onCheck: () => void;
};

export default function CheckBoxInput({
    checked = true,
    name,
    imgSrc = null,
    onCheck = () => {},
}: CheckBoxInputType) {
    const [isChecked, setIsChecked] = useState(checked);

    function handleClick() {
        onCheck();
        setIsChecked(!isChecked);
    }

    return (
        <div className="flex items-center gap-3" onClick={() => handleClick()}>
            <div>
                <Image
                    className={isChecked ? '' : 'hidden'}
                    src={checkedSvg}
                    alt="Checked"
                ></Image>
                <Image
                    className={isChecked ? 'hidden' : ''}
                    src={uncheckedSvg}
                    alt="Unchecked"
                ></Image>
            </div>
            <Image
                src={imgSrc}
                width={20}
                className="h-auto"
                alt="React logo"
            />
            <label>{name}</label>
        </div>
    );
}
