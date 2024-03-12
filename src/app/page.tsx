'use client';

import Game from '@/components/Snake/Snake';
import Link from 'next/link';
import radialBg from '../assets/img/radial-bg.svg';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import { useAppSelector } from '@/store/store';

export default function Home() {
    const translation = useAppSelector(
        (state) => state.langReducer.value.translation
    );
    return (
        <Container pagePath="/" footerHiddenOnSmallScreen={true}>
            <div
                id="background-img"
                className="absolute top-0 left-0 h-screen w-screen overflow-hidden -z-10"
            >
                <Image
                    src={radialBg}
                    alt="background image"
                    className={
                        'absolute top-14 max-w-none -translate-x-1/3 h-4/5 ' +
                        'lg:translate-x-1/4 lg:translate-y-1/4 lg:w-full'
                    }
                />
            </div>
            <div
                id="main-content"
                className={
                    'relative w-full h-full flex flex-col justify-around overflow-hidden text-white mx-auto ' +
                    'md:flex-row md:justify-center md:items-center ' +
                    'xl:max-w-[1280px] xl:justify-around ' +
                    '2xl:max-w-[1500px]'
                }
            >
                <div
                    className={
                        'relative p-7 ' +
                        'md:flex md:flex-col md:h-full justify-center ' +
                        'lg:max-w-[45%] lg:m-0 '
                    }
                >
                    <p className="text-base font-light tracking-wider">
                        {translation.hi_all_i_am}
                    </p>
                    <h1 className="text-6xl font-light">Lucas Gerard</h1>
                    <p className="text-[#43D9AD] text-lg text-light">
                        &gt; Front-end developer
                    </p>
                    <div className=" h-36 pt-16">
                        <div className="absolute md:block">
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96] text-sm md:hidden">
                                // {translation.find_my_profile_on_Github}:
                            </p>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96] text-sm hidden md:block">
                                // {translation.Complete_the_game_to_continue}
                            </p>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96] text-sm hidden md:block">
                                //
                                {
                                    translation.you_can_also_see_it_on_my_Github_page
                                }
                            </p>
                            <div className="md:flex items-center mt-[12px]">
                                <p className="text-sm">
                                    <span className="text-[#4D5BCE]">
                                        const
                                    </span>
                                    <span className="text-[#43D9AD]">
                                        githubLink
                                    </span>
                                    =
                                    <Link
                                        className="text-[#E99287]"
                                        href="https://github.com/Raisery"
                                    >
                                        https://
                                    </Link>
                                </p>
                                <Link
                                    className="text-sm text-[#E99287]"
                                    href="https://github.com/Raisery"
                                >
                                    github.com/Raisery
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="game-container"
                    className={
                        'hidden ' +
                        'md:flex md:h-3/5 md:w-2/5 md:justify-center md:items-center'
                    }
                >
                    <Game />
                </div>
            </div>
        </Container>
    );
}
