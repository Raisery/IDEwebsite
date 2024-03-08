import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import githubSvg from '../../assets/img/github.svg';
import twitterSvg from '../../assets/img/twitter.svg';
import facebookSvg from '../../assets/img/facebook.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/store/store';
import { LANGUAGES, changeLang } from '@/store/features/langSlice';

type FooterProps = {
    hiddenOnSmallScreen?: boolean;
};

function Footer({ hiddenOnSmallScreen = false }: FooterProps) {
    const lang = useAppSelector((state) => state.langReducer.value);
    const dispatch = useDispatch();

    return (
        <footer
            className={
                (hiddenOnSmallScreen ? 'hidden md:flex ' : 'flex ') +
                'h-12 justify-between text-[#607B96] border border-[#1E2D3D] rounded-b-lg border-t-transparent'
            }
        >
            <div className="flex h-full text-[#607B96] lg:w-custom3">
                <p className="flex w-full border-r  border-[#1E2D3D] px-4 py-2 h-full items-center md:pr-1">
                    {lang.translation.find_me_in}:
                </p>
                <Link
                    className="p-3 w-16 flex items-center border-r  border-[#1E2D3D] h-full"
                    href="#"
                >
                    <Image
                        className="h-full w-full"
                        src={twitterSvg}
                        alt="twitter"
                    ></Image>
                </Link>
                <Link
                    className="p-3 w-16 flex items-center md:border-r  border-[#1E2D3D] h-full"
                    href="#"
                >
                    <Image
                        className="h-full w-full"
                        src={facebookSvg}
                        alt="facebook"
                    ></Image>
                </Link>
            </div>
            <div>
                <button
                    className="border border-[#FFF] hover:cursor-pointer"
                    onClick={() => {
                        if (lang.currentLang === LANGUAGES.EN) {
                            dispatch(changeLang(LANGUAGES.FR));
                        } else {
                            dispatch(changeLang(LANGUAGES.EN));
                        }
                    }}
                >
                    Change Language {lang.currentLang}
                </button>
            </div>
            <Link
                className={
                    'h-full p-3 w-16 flex items-center -mr-2 border-l border-[#1E2D3D] text-[#607B96] ' +
                    ' md:px-4 md:py-2 md:w-auto'
                }
                href="https://github.com/Raisery"
            >
                <span className=" hidden md:block">@Raisery</span>
                <Image
                    className="md:ml-2"
                    src={githubSvg}
                    alt="twitter"
                ></Image>
            </Link>
        </footer>
    );
}

export default Footer;
