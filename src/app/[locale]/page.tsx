import Game from '@/components/Client/Snake/Snake';
import Link from 'next/link';
import radialBg from '../../assets/img/radial-bg.svg';
import Image from 'next/image';
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');
    const messages = useMessages();
    return (
        <>
            <div
                id="background-img"
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
            <div
                id="main-content"
                className={
                    'relative w-full h-full flex flex-col justify-around overflow-hidden text-white mx-auto smartphone_landscape:items-start ' +
                    'desktop:flex-row tablet:justify-around tablet:items-center ' +
                    'desktop:max-w-[1280px]' +
                    'desktop_xl:max-w-[1500px]'
                }
            >
                <div
                    className={
                        'relative  ml-5 flex-col ' +
                        'tablet:flex justify-center '
                    }
                >
                    <p className=" font-light tracking-wider laptop:text-xl">
                        {t('hi_all_i_am')}
                    </p>
                    <h1 className="text-3xl laptop:text-5xl font-light">
                        Lucas Gerard
                    </h1>
                    <p className="text-[#43D9AD]  laptop:text-xl text-light">
                        &gt; Front-end developer
                    </p>
                    <div className="mt-5 tablet_landscape:hidden">
                        <div className="">
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96]  tablet:hidden">
                                // {t('find_my_profile_on_Github')}:
                            </p>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96]  hidden tablet:block laptop:text-lg">
                                // {t('Complete_the_game_to_continue')}
                            </p>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <p className="text-[#607B96]  hidden tablet:block laptop:text-lg">
                                // {t('you_can_also_see_it_on_my_Github_page')}
                            </p>
                            <div className="tablet:flex items-center mt-[12px]">
                                <p className=" flex gap-2 laptop:text-lg">
                                    <span className="text-[#4D5BCE] laptop:text-lg">
                                        const
                                    </span>
                                    <span className="text-[#43D9AD] laptop:text-lg">
                                        githubLink
                                    </span>
                                    =
                                    <Link
                                        className="text-[#E99287] laptop:text-lg"
                                        href="https://github.com/Raisery"
                                    >
                                        https://
                                    </Link>
                                </p>
                                <Link
                                    className=" text-[#E99287] "
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
                        'hidden smartphone_landscape:hidden ' +
                        'tablet:flex tablet:h-3/5 tablet:w-[80%] tablet:justify-center tablet:items-center desktop:w-2/5'
                    }
                >
                    <NextIntlClientProvider messages={messages}>
                        <Game />
                    </NextIntlClientProvider>
                </div>
            </div>
        </>
    );
}
