import React from 'react'
import menuSvg from '../../assets/menu.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='border-b border-b-[#1E2D3D]/50 h-[55px] w-full flex justify-between px-[18px]'>
        <p className='text-base text-[#607B96] flex items-center'>lucas-gerard</p>
        <button className='w-[16px]'><Image src={menuSvg} alt='menu'></Image></button>
    </div>
  )
}

export default Header