'use client'

import React, { useEffect, useState } from 'react'
import Container from '@/components/Container/Container'
import Dropdown from '@/components/Dropdown/Dropdown'
import Image from 'next/image'
import orangeFolder from '../../assets/img/orange-folder.svg'
import greenFolder from '../../assets/img/green-folder.svg'
import blueFolder from '../../assets/img/blue-folder.svg'
import fileSvg from '../../assets/img/file.svg'
import chevron from '../../assets/img/chevron.svg'
import Link from 'next/link'

export default function About() {
    const content = [
        <div key={Math.trunc(Math.random() * 999) + '-personnal-info'}>
            <div className="flex">
                <h2>{'// personal-info'}</h2>
                <h3 className=" text-slate-500 ml-2"> / bio</h3>
            </div>

            <p id="who-i-am" className=" text-slate-500 mt-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia consequuntur molestias magnam neque! Voluptate amet,
                magnam repellat ratione ipsa dolorum sint quaerat at dicta
                distinctio animi laudantium ducimus aut neque!
            </p>
            <div className="flex">
                <h2>{'// personal-info'}</h2>
                <h3 className=" text-slate-500 ml-2"> / education</h3>
            </div>

            <p id="high-school" className=" text-slate-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia consequuntur molestias magnam neque! Voluptate amet,
                magnam repellat ratione ipsa dolorum sint quaerat at dicta
                distinctio animi laudantium ducimus aut neque!
            </p>
            <p id="university" className=" text-slate-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia consequuntur molestias magnam neque! Voluptate amet,
                magnam repellat ratione ipsa dolorum sint quaerat at dicta
                distinctio animi laudantium ducimus aut neque!
            </p>
        </div>,
        <div key={Math.trunc(Math.random() * 999) + '-hobbies'}>
            <div className="flex">
                <h2>{'// hobbies'}</h2>
                <h3 className=" text-slate-500 ml-2"> / music</h3>
            </div>
            <p id="guitar" className=" text-slate-500 my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                ipsa accusantium aspernatur deserunt perferendis ex dolor quod.
                Temporibus fugit velit repellat molestias quaerat, ipsa cumque
                ipsum at in distinctio fugiat.
            </p>
            <div className="flex">
                <h2>{'// hobbies'}</h2>
                <h3 className=" text-slate-500 ml-2"> / sport</h3>
            </div>
            <p id="handball" className=" text-slate-500 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ratione veritatis aliquid adipisci optio eum
                reprehenderit officia incidunt amet eos nobis fugiat, asperiores
                doloribus, necessitatibus perspiciatis ipsam facilis.
                Distinctio, dicta.
            </p>
        </div>,
    ]
    const [currentContent, setCurrentContent] = useState(content[0])
    const [currentDropDown, setCurrentDropDown] = useState('0')

    // change the content and the active dropdown on click on one of them
    function handleClick(id: string) {
        if (id === currentDropDown) return
        setCurrentDropDown(id)
        setCurrentContent(content[Number.parseInt(id)])
    }

    function handleFileClick(event: React.MouseEvent) {
        event.preventDefault()
        event.stopPropagation()
    }

    return (
        <Container pagePath="About" pageName="_about-me">
            <div className="w-full h-full flex flex-col justify-between relative text-white">
                <div className="w-full relative flex flex-col gap-1 lg:flex-row lg:w-full lg:h-full">
                    <div className=" lg:w-1/4 lg:border-r border-r-[#1E2D3D]/70">
                        <Dropdown
                            id="0"
                            title="personal-info"
                            onClick={handleClick}
                            active={currentDropDown === '0'}
                        >
                            <Dropdown
                                indicator={chevron}
                                title={
                                    <ComposedTitle
                                        img={orangeFolder}
                                        title="bio"
                                    />
                                }
                            >
                                <Link
                                    href="#who-i-am"
                                    className="flex ml-10 gap-2 "
                                    onClick={handleFileClick}
                                >
                                    <Image src={fileSvg} alt="file" />
                                    who-i-am
                                </Link>
                            </Dropdown>
                            <Dropdown
                                indicator={chevron}
                                title={
                                    <ComposedTitle
                                        img={blueFolder}
                                        title="education"
                                    />
                                }
                            >
                                <Link
                                    href="#high-school"
                                    className="flex ml-10 gap-2 "
                                >
                                    <Image src={fileSvg} alt="file" />
                                    high-school
                                </Link>
                                <Link
                                    href="#university"
                                    className="flex ml-10 gap-2 "
                                >
                                    <Image src={fileSvg} alt="file" />
                                    university
                                </Link>
                            </Dropdown>
                        </Dropdown>
                        <Dropdown
                            id="1"
                            title="hobbies"
                            onClick={handleClick}
                            active={currentDropDown === '1'}
                        >
                            <Dropdown
                                indicator={chevron}
                                title={
                                    <ComposedTitle
                                        img={orangeFolder}
                                        title="sport"
                                    />
                                }
                            >
                                <Link
                                    href="#handball"
                                    className="flex ml-10 gap-2 "
                                >
                                    <Image src={fileSvg} alt="file" />
                                    handball
                                </Link>
                            </Dropdown>
                            <Dropdown
                                indicator={chevron}
                                title={
                                    <ComposedTitle
                                        img={greenFolder}
                                        title="music"
                                    />
                                }
                            >
                                <Link
                                    href="#guitar"
                                    className="flex ml-10 gap-2 "
                                >
                                    <Image src={fileSvg} alt="file" />
                                    guitar
                                </Link>
                            </Dropdown>
                        </Dropdown>
                    </div>
                    <div className="mt-4 px-6 pb-4 lg:w-full">
                        {currentContent}
                    </div>
                </div>
            </div>
        </Container>
    )
}

type ComposedTitleProps = {
    img: any
    title: string
}
function ComposedTitle({ img, title }: ComposedTitleProps) {
    return (
        <div className="flex gap-2 ">
            <Image src={img} alt="title" />
            <p>{title}</p>
        </div>
    )
}
