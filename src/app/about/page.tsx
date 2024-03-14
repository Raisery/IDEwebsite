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
        <Container pagePath="About" pageName="_about-me">
            <div className="w-full h-full flex flex-col justify-between relative text-white text-lg">
                <div className="w-full relative flex flex-col gap-1 laptop:gap-0 laptop:flex-row laptop:h-full laptop:justify-between">
                    <div className=" laptop:w-custom2 laptop:border-r border-r-[#1E2D3D]">
                        {/*generate dropdown menu */}
                        <DropDownMenu />
                    </div>
                    <div className="mt-4 px-6 pb-4 w-full">
                        {/*generate dynamic content
                        <AboutContent data={translation}*/}
                        <AboutContent currentDropDown={currentDropDown} />
                    </div>
                </div>
            </div>
        </Container>
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
