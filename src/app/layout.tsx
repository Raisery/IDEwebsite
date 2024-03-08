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
        <html lang="en" className="w-full h-full">
            <body className="flex bg-[#010C15] w-full min-h-full">
                <Stripes />
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
