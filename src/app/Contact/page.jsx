'use client';

import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';

export default function Contact() {
    return (
        <div id="contact" className="w-full h-full p-4">
            <div
                id="contact-main"
                className="w-full h-full flex flex-col bg-[#011627]/60 border border-[#1E2D3D] rounded-lg"
            >
                <Header pagePath="/Projects" />
                <Container>
                    <div className="border text-white">CONTACT</div>
                </Container>
                <Footer />
            </div>
        </div>
    );
}
