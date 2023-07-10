import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between overflow-hidden relative">
            <Header pagePath="Contact" pageName="_contact-me" />
            <div className="w-full h-full"></div>
            <Footer />
        </div>
    )
}

export default Contact
