import React, { useState } from 'react';
import DropDownMenu from '@/components/Client/Dropdown/DropdownMenu';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import AboutContent from '@/app/[locale]/about/AboutContent';
import AboutWrapper from './AboutWrapper';

export default function About() {
    const messages = useMessages();
    return (
        <div
            id="main-content"
            className={
                'w-full h-full flex flex-col text-white smartphone_landscape:flex-row laptop:flex-row'
            }
        >
            <NextIntlClientProvider messages={messages}>
                <AboutWrapper />
            </NextIntlClientProvider>
            {/*generate dropdown menu */}
        </div>
    );
}
