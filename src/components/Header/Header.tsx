'use client';

import React, { SyntheticEvent, useState } from 'react';
import menuSvg from '../../assets/img/menu.svg';
import closeSvg from '../../assets/img/cross.svg';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';
import { useAppSelector } from '@/store/store';

type Props = {
    pagePath: string;
    pageName?: string;
    onMenuActive?: React.Dispatch<React.SetStateAction<any>>;
};

const Header = ({ pagePath, pageName, onMenuActive }: Props) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    // change border to after for the active display on menu
    const translation = useAppSelector(
        (state) => state.langReducer.value.translation
    );

    function handleMenu(event: SyntheticEvent) {
        setIsMenuActive(!isMenuActive);
        if (onMenuActive) onMenuActive(!isMenuActive);
    }

    const Button = () => {
        return (
            <button className="md:hidden w-4 mr-4" onClick={handleMenu}>
                <Image
                    className={isMenuActive ? 'hidden' : ''}
                    src={menuSvg}
                    alt="menu"
                ></Image>
                <Image
                    className={isMenuActive ? '' : 'hidden'}
                    src={closeSvg}
                    alt="close"
                ></Image>
            </button>
        );
    };

    const Options = () => {
        return (
            <div className="h-full hidden md:flex items-center w-full justify-between">
                <div className="h-full flex">
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D] items-center ' +
                            (pagePath === '/'
                                ? 'border-b border-b-[#FEA55F]'
                                : '')
                        }
                        href="/"
                    >
                        _{translation.hello}
                    </Link>
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D] items-center ' +
                            (pagePath === 'About'
                                ? 'border-b border-b-[#FEA55F]'
                                : '')
                        }
                        href="/About"
                    >
                        _{translation.about_me}
                    </Link>
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D] items-center ' +
                            (pagePath === '/Projects'
                                ? 'border-b border-b-[#FEA55F]'
                                : '')
                        }
                        href="/Projects"
                    >
                        _{translation.projects}
                    </Link>
                </div>

                <Link
                    className={
                        'h-full flex px-4 border-l border-l-[#1E2D3D] items-center ' +
                        (pagePath === '/Contact'
                            ? 'border-b border-b-[#FEA55F]'
                            : '')
                    }
                    href="/Contact"
                >
                    _{translation.contact_me}
                </Link>
            </div>
        );
    };

    const Banner = () => {
        return (
            <div>
                <div
                    id="header-banner"
                    className={
                        'w-full h-14 flex justify-between ' +
                        'md:justify-start ' +
                        'border-b border-b-[#1E2D3D] '
                    }
                >
                    <p
                        id="dev-name"
                        className={
                            'flex items-center  pl-4 ' +
                            'md:border-r md:border-r-[#1E2D3D] lg:w-custom'
                        }
                    >
                        lucas-gerard
                    </p>
                    <Button />
                    <Options />
                </div>
            </div>
        );
    };

    const Menu = () => {
        return (
            <div
                className={
                    'absolute z-50 top-0 right-0 left-0 h-screen flex flex-col justify-between p-4 border border-transparent'
                }
            >
                <div className="flex flex-col relative h-full border border-[#1E2D3D] rounded-lg">
                    <div className="h-full border-b border-b-[#1E2D3D]">
                        <Banner />
                        <div className="w-full flex flex-col text-white/80">
                            <Link
                                className="h-[55px] border-b  border-b-[#1E2D3D] pl-[18px] flex items-center"
                                href="/"
                            >
                                _{translation.hello}
                            </Link>
                            <Link
                                className="h-[55px] border-b  border-b-[#1E2D3D] pl-[18px] flex items-center"
                                href="/About"
                            >
                                _{translation.about_me}
                            </Link>
                            <Link
                                className="h-[55px] border-b  border-b-[#1E2D3D] pl-[18px] flex items-center"
                                href="/Projects"
                            >
                                _{translation.projects}
                            </Link>
                            <Link
                                className="h-[55px] border-b  border-b-[#1E2D3D] pl-[18px] flex items-center"
                                href="/Contact"
                            >
                                _{translation.contact_me}
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    };

    return (
        <nav
            className={
                'text-base text-[#607B96] border border-[#1E2D3D] rounded-t-lg z-10'
            }
        >
            {isMenuActive ? <Menu /> : <Banner />}
            <div
                className={
                    ' h-16 flex items-center pl-8 ' +
                    'md:hidden ' +
                    (pageName && !isMenuActive ? '' : 'hidden ')
                }
            >
                <p className="text-white">{pageName}</p>
            </div>
        </nav>
    );
};

export default Header;
