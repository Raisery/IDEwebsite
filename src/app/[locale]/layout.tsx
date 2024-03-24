import './globals.css';
import Stripes from '@/components/Server/Stripes/Stripes';
import Header from '@/components/Client/Header/Header';
import Footer from '@/components/Client/Footer/Footer';
import StoreProvider from '../StoreProvider';
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from 'next-intl';
import { pick } from 'lodash';

export const metadata = {
    title: 'Lucas Gérard - Web developper',
    description: 'Front-End Developper',
};

type LayoutProps = {
    params: { locale: string };
    children: React.ReactNode;
};

export default function RootLayout({ children, params }: LayoutProps) {
    const { locale } = params;
    const messages = useMessages();

    return (
        <html lang={locale} className="">
            <body className="flex bg-[#010C15] w-full h-screen text-xs tablet:text-sm laptop:text-base">
                <Stripes />
                <StoreProvider>
                    <main id="root-layout" className="w-full h-full p-4 ">
                        <div className="w-full h-full flex flex-col bg-[#011627]/60 border border-[#1E2D3D] rounded-lg">
                            <NextIntlClientProvider messages={messages}>
                                <Header />
                            </NextIntlClientProvider>
                            <div
                                id="page-container"
                                className={
                                    'flex flex-col w-full h-full overflow-y-auto border-y border-[#1E2D3D] tablet:' +
                                    '' /*shadow-[10px_0_60px_80px_rgba(1,12,21,0.95)] */
                                }
                            >
                                {children}
                            </div>
                            <NextIntlClientProvider messages={messages}>
                                <Footer />
                            </NextIntlClientProvider>
                        </div>
                    </main>
                </StoreProvider>
            </body>
        </html>
    );
}
