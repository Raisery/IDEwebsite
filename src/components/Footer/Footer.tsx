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
                (hiddenOnSmallScreen ? 'hidden tablet:flex ' : 'flex ') +
                'h-8 justify-between text-[#607B96]  relative tablet:h-10 '
            }
        >
            <div className="flex h-full text-[#607B96] laptop:w-custom3">
                <p className="flex border-r  border-[#1E2D3D] px-4 py-2 h-full items-center tablet:pr-1">
                    {lang.translation.find_me_in}:
                </p>
                <Link
                    className="p-2 flex items-center border-r  border-[#1E2D3D] h-full"
                    href="#"
                >
                    <Image
                        className="h-full"
                        src={twitterSvg}
                        alt="twitter"
                    ></Image>
                </Link>
                <Link
                    className="p-2 flex items-center border-r  border-[#1E2D3D] h-full"
                    href="#"
                >
                    <Image
                        className="h-full"
                        src={facebookSvg}
                        alt="facebook"
                    ></Image>
                </Link>
            </div>
            {/*Under dev advertising */}
            <h3 className="h-full w-[45%] items-center text-red-500 text-center hidden tablet:flex text-xs">
                {lang.translation.in_dev_advertising}
            </h3>
            <div className="flex">
                <div className="flex h-full px-2 border-l  border-[#1E2D3D]">
                    <button
                        className="hover:cursor-pointer"
                        onClick={() => {
                            if (lang.currentLang === LANGUAGES.EN) {
                                dispatch(changeLang(LANGUAGES.FR));
                            } else {
                                dispatch(changeLang(LANGUAGES.EN));
                            }
                        }}
                    >
                        {lang.currentLang}
                    </button>
                </div>
                <Link
                    className={
                        'h-full p-3 w-16 flex items-center -mr-2 border-l border-[#1E2D3D] text-[#607B96] ' +
                        ' tablet:px-4 tablet:py-2 tablet:w-auto'
                    }
                    href="https://github.com/Raisery"
                >
                    <span className=" hidden tablet:block">@Raisery</span>
                    <Image
                        className="tablet:ml-2"
                        src={githubSvg}
                        alt="twitter"
                    ></Image>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
