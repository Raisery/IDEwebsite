'use client';

import React, { useState } from 'react';
import Container from '@/components/Container/Container';
import dropDownDatas from '../../data/dropDownMenu.json';
import { useAppSelector } from '@/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DropDownMenu from '@/components/Dropdown/DropdownMenu';

export default function About() {
    const translation = useAppSelector(
        (state) => state.langReducer.value.translation
    );
    const [currentDropDown, setCurrentDropDown] = useState('0');

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
                            <DropDownMenu
                                setCurrentDropDown={setCurrentDropDown}
                                currentDropDown={currentDropDown}
                            />
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
