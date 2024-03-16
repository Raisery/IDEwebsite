'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/Container/Container';
import Dropdown from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import orangeFolder from '../../assets/img/orange-folder.svg';
import greenFolder from '../../assets/img/green-folder.svg';
import foodUp from '../../assets/img/food-up.svg';
import blueFolder from '../../assets/img/blue-folder.svg';
import fileSvg from '../../assets/img/file.svg';
import chevron from '../../assets/img/chevron.svg';
import Link from 'next/link';
import dropDownDatas from '../../data/dropDownMenu.json';
import { useAppSelector } from '@/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

type dropDownDatasType = {
    title: string;
    img: string;
    chevron: boolean;
    content: dropDownDatasType[];
};

export default function About() {
    const translation = useAppSelector(
        (state) => state.langReducer.value.translation
    );
    const [currentDropDown, setCurrentDropDown] = useState('0');

    // change the content and the active dropdown on click on one of them
    function handleClick(id: string) {
        setCurrentDropDown(id);
    }

    function handleFileClick(event: React.MouseEvent) {
        event.preventDefault();
        //focus on the target content
        event.stopPropagation();
    }

    function DropDownMenu() {
        function buildMenu(currentItem: dropDownDatasType) {
            const builded: React.JSX.Element[] = [];
            for (let item of currentItem.content) {
                let image: typeof blueFolder;

                switch (item.img) {
                    case 'file':
                        image = fileSvg;
                        break;
                    case 'blue_folder':
                        image = blueFolder;
                        break;
                    case 'orange_folder':
                        image = orangeFolder;
                        break;
                    case 'green_folder':
                        image = greenFolder;
                        break;
                    default:
                        image = fileSvg;
                        break;
                }
                builded.push(
                    <Dropdown
                        key={Math.trunc(Math.random() * 999) + '-dropdown'}
                        title={ComposedTitle({ img: image, title: item.title })}
                        indicator={item.chevron ? chevron : foodUp}
                        active={item.title === 'bio' ? true : false}
                        className="ml-5"
                    >
                        {buildMenu(item)}
                    </Dropdown>
                );
            }

            return builded;
        }

        let dropDownList: React.JSX.Element[] = [];
        for (let dropDown of dropDownDatas) {
            dropDownList.push(
                <Dropdown
                    key={Math.trunc(Math.random() * 999999999) + '-dropdown'}
                    id={dropDownDatas.indexOf(dropDown).toString()}
                    title={dropDown.title}
                    active={
                        currentDropDown ===
                        dropDownDatas.indexOf(dropDown).toString()
                            ? true
                            : false
                    }
                    className="ml-5"
                    onClick={handleClick}
                >
                    {buildMenu(dropDown)}
                </Dropdown>
            );
        }

        return dropDownList;
    }
    return (
        <div id="About" className="w-full h-full p-4 ">
            <div
                id="About-main"
                className="w-full h-full flex flex-col bg-[#011627]/60 border border-[#1E2D3D] rounded-lg"
            >
                <Header pagePath="About" pageName={translation.about_me} />
                <Container>
                    <div
                        id="main-content"
                        className={
                            'w-full h-full flex flex-col text-white smartphone_landscape:flex-row laptop:flex-row'
                        }
                    >
                        {/*generate dropdown menu */}
                        <div className="w-full h-[20%] overflow-y-auto border-b-[3px] border-[#1E2D3D] scrollbar-custom smartphone_landscape:h-auto smartphone_landscape:border-b-0 smartphone_landscape:w-[50%] smartphone_landscape:border-r-[5px] laptop:w-[25%] laptop:h-full laptop:border-b-0 laptop:border-r-[5px]">
                            <DropDownMenu />
                        </div>

                        {/*generate dynamic content
                        <AboutContent data={translation}*/}
                        <div className="w-full h-[80%] overflow-y-auto p-4 smartphone_landscape:h-auto smartphone_landscape:w-full laptop:w-[75%] laptop:h-full">
                            <AboutContent currentDropDown={currentDropDown} />
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        </div>
    );
}

function Pcontent({
    pArray,
    className,
}: {
    pArray: string[];
    className: string;
}) {
    const pList: React.JSX.Element[] = [];
    for (let p of pArray) {
        pList.push(
            <p
                key={
                    Math.trunc(Math.random() * 999) + '-pGenerated-' + p.length
                }
                className={'mb-5 ' + className}
            >
                {p}
            </p>
        );
    }

    return pList;
}

type AboutContentProps = {
    currentDropDown: string;
};

function AboutContent({ currentDropDown }: AboutContentProps) {
    const translation = useAppSelector(
        (state) => state.langReducer.value.translation
    );
    const mainDropDownData = dropDownDatas[Number.parseInt(currentDropDown)];
    const id = Number.parseInt(currentDropDown);

    const mainDropDownContent: React.JSX.Element[] = [];
    const mainDropDownIndex =
        mainDropDownData.title as keyof typeof translation;
    mainDropDownData.content.forEach((folder, index) => {
        console.log(folder.content);
        console.log(' index: ' + index);
        mainDropDownContent.push(
            <div
                key={
                    Math.trunc(Math.random() * 999) +
                    '-generated-' +
                    mainDropDownData.title
                }
            >
                <div className="flex">
                    <h2>{'// ' + translation[mainDropDownIndex]}</h2>
                    <h3 className=" text-slate-500 ml-2">
                        {/* Ne pas utiliser l'index du folder pour chercher dans folder.content CONNARD*/}
                        {'/' +
                            translation[
                                folder.title as keyof typeof translation
                            ]}
                    </h3>
                </div>
                {generateFileContent(
                    translation.about_content[
                        mainDropDownData.title as keyof typeof translation.about_content
                    ],
                    index
                )}
            </div>
        );
    });

    function generateFileContent(
        fileTranslationList:
            | typeof translation.about_content.personal_info
            | typeof translation.about_content.hobbies,
        folderIndex: number
    ) {
        const pFileList: React.JSX.Element[] = [];
        dropDownDatas[id].content[folderIndex].content.forEach(
            (item, index) => {
                const fileIndex =
                    item.title as keyof typeof fileTranslationList;
                //formatting file content into a React Node
                pFileList.push(
                    <div
                        id={item.title}
                        className=" text-slate-500 my-4"
                        key={
                            Math.trunc(Math.random() * 999) +
                            '-generated-' +
                            item.title
                        }
                    >
                        <h2 className="mb-5 flex text-blue-500">
                            <span className="text-[#ebc334] mr-2">
                                function
                            </span>
                            {item.title + '()'}
                            <span className="text-[#ebc334] ml-2">{'{'}</span>
                        </h2>
                        <Pcontent
                            className="ml-6 text-red-400"
                            pArray={fileTranslationList[fileIndex]}
                        />
                        <h2 className="text-[#ebc334]">{'}'}</h2>
                    </div>
                );
            }
        );
        return pFileList;
    }

    return <div>{mainDropDownContent}</div>;
}

type ComposedTitleProps = {
    img: any;
    title: string;
};

function ComposedTitle({ img, title }: ComposedTitleProps) {
    return (
        <div className="flex gap-2 ">
            <Image src={img} alt="title" />
            <p>{title}</p>
        </div>
    );
}
