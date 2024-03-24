'use client';

import React, { useState } from 'react';
import menuSvg from '@/assets/img/menu.svg';
import closeSvg from '@/assets/img/cross.svg';
import radialBg from '@/assets/img/radial-bg.svg';
import Image from 'next/image';
import { Link } from '@/navigation';
import Footer from '../Footer/Footer';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

type Props = {
    onMenuActive?: React.Dispatch<React.SetStateAction<any>>;
};

const Header = ({ onMenuActive }: Props) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    // change border to after for the active display on menu
    const pagePath = usePathname();
    const pageName = pagePath.split('/').slice(-1);
    const t = useTranslations('Header');
    const locale = useLocale();

    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
        if (onMenuActive) onMenuActive(!isMenuActive);
    }

    const Button = () => {
        return (
            <button className="tablet:hidden w-4 mr-4" onClick={toggleMenu}>
                <Image
                    className={isMenuActive ? 'hidden' : undefined}
                    src={menuSvg}
                    alt="menu"
                ></Image>
                <Image
                    className={isMenuActive ? undefined : 'hidden'}
                    src={closeSvg}
                    alt="close"
                ></Image>
            </button>
        );
    };

    const Options = () => {
        return (
            <div className="h-full hidden tablet:flex items-center w-full justify-between">
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
                        _{t('hello')}
                    </Link>
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D] items-center ' +
                            (pagePath === 'About'
                                ? 'border-b border-b-[#FEA55F]'
                                : '')
                        }
                        href="/about"
                    >
                        _{t('about_me')}
                    </Link>
                    <Link
                        className={
                            'h-full flex px-4 border-r border-r-[#1E2D3D] items-center ' +
                            (pagePath === '/Projects'
                                ? 'border-b border-b-[#FEA55F]'
                                : '')
                        }
                        href="/projects"
                    >
                        _{t('projects')}
                    </Link>
                </div>

                <Link
                    className={
                        'h-full flex px-4 border-l border-l-[#1E2D3D] items-center ' +
                        (pagePath === '/Contact'
                            ? 'border-b border-b-[#FEA55F]'
                            : '')
                    }
                    href="/contact"
                >
                    _{t('contact_me')}
                </Link>
            </div>
        );
    };

    const ModalMenu = () => {
        return (
            <div
                className={
                    'absolute z-50 top-0 left-0 h-screen w-screen flex flex-col p-4 bg-[#010C15]'
                }
                onClick={() => {
                    setIsMenuActive(!isMenuActive);
                }}
            >
                <div
                    id="header-bg"
                    className="absolute top-0 left-0 h-screen w-screen overflow-hidden -z-10"
                >
                    <Image
                        src={radialBg}
                        alt="background image"
                        className={
                            'absolute top-14 max-w-none -translate-x-1/3 h-4/5 ' +
                            'laptop:translate-x-1/4 laptop:translate-y-1/4 laptop:w-full'
                        }
                    />
                </div>
                <div className="flex flex-col relative h-full w-full bg-[#011627]/60 border border-[#1E2D3D] rounded-lg ">
                    <div className="h-full w-full flex flex-col">
                        <div className="flex h-[10%] w-full justify-between">
                            <p
                                id="dev-name"
                                className={'flex items-center pl-4  '}
                            >
                                lucas-gerard
                            </p>
                            <Button />
                        </div>

                        <div className="w-full h-full flex flex-col text-white/80 border-[#1E2D3D] border-y">
                            <Link
                                className="h-[55px] pl-[18px] flex items-center"
                                href="/"
                            >
                                _{t('hello')}
                            </Link>
                            <Link
                                className="h-[55px] pl-[18px] flex items-center"
                                href="/about"
                            >
                                _{t('about_me')}
                            </Link>
                            <Link
                                className="h-[55px] pl-[18px] flex items-center"
                                href="/projects"
                            >
                                _{t('projects')}
                            </Link>
                            <Link
                                className="h-[55px] pl-[18px] flex items-center"
                                href="/contact"
                            >
                                _{t('contact_me')}
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    };

    return (
        <div className="h-12">
            {isMenuActive ? <ModalMenu /> : null}
            <div
                id="header-banner"
                className="w-full h-full flex justify-between text-[#607B96]"
            >
                <p
                    id="dev-name"
                    className={
                        'flex h-full w-full items-center justify-center ' +
                        'tablet:border-r-[#1E2D3D] tablet:border-r-[3px] tablet:w-44 laptop:w-56'
                    }
                >
                    lucas-gerard
                    {pageName ? (
                        <span className=" tablet:hidden">{'/' + pageName}</span>
                    ) : null}
                </p>
                <Button />
                <Options />
            </div>
        </div>
    );
};

export default Header;
