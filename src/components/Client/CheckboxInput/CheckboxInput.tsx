'use client';

import { useState } from 'react';
import reactLogo from '../../assets/img/react-logo.svg';
import Image from 'next/image';

type CheckBoxInputType = {
    name: string;
    imgSrc?: typeof reactLogo;
    callback?: Function;
};

export default function CheckBoxInput({
    name,
    imgSrc = null,
    callback,
}: CheckBoxInputType) {
    const [isChecked, setIsChecked] = useState(true);

    function handleClick() {
        setIsChecked(!isChecked);
        if (callback) callback();
    }

    return (
        <div
            className="flex items-center gap-2"
            onClick={() => setIsChecked(!isChecked)}
        >
            <input
                type="checkbox"
                className="mr-2 overflow-hidden h-4 w-4"
                value={'React'}
                checked={isChecked}
            />
            <Image src={imgSrc} height={20} alt="React logo" />
            <label>{name}</label>
        </div>
    );
}
