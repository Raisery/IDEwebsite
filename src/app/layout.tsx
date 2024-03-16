import { ReduxProvider } from '@/store/provider';
import './globals.css';
import Stripes from '@/components/Stripes/Stripes';

export const metadata = {
    title: 'Lucas Gérard - Web developper',
    description: 'Front-End Developper',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="">
            <body className="flex bg-[#010C15] w-full h-screen text-xs tablet:text-sm laptop:text-base">
                <Stripes />
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
