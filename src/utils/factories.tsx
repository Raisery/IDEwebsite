'use client'

import Dropdown from '@/components/Dropdown/Dropdown'
import Image from 'next/image'
import orangeFolder from './../assets/img/orange-folder.svg'
import greenFolder from './../assets/img/green-folder.svg'
import blueFolder from './../assets/img/blue-folder.svg'
import fileSvg from './../assets/img/file.svg'

const ICON: { [key: string]: any } = {
    orange: orangeFolder,
    green: greenFolder,
    blue: blueFolder,
    file: fileSvg,
}

function randomId() {
    return Math.trunc(Math.random() * 10000) + Math.trunc(Math.random() * 10000)
}

//generate Dropdown hierarchy from a json file
export function dropDownFactory(data: any) {
    const formatedData = []

    // for each node
    for (const element of data) {
        // Folder
        if (element.type === 'folder') {
            //recursive call
            const content = dropDownFactory(element.elements)
            const tmp = { name: element.name }
            //If the name of the folder is composed by text + img -> generate a div with Image + p
            if (element.composedName) {
                tmp.name = (
                    <div className="flex gap-2">
                        <Image src={ICON[element.name.img]} alt="icon" />
                        <p className="flex gap-2">{element.name.text}</p>
                    </div>
                )
            }
            formatedData.push(
                <Dropdown
                    key={randomId()}
                    title={tmp.name}
                    hover={element.hover}
                >
                    {content}
                </Dropdown>
            )
        }
        // File
        if (element.type === 'file') {
            // If the name is composed
            if (element.img) {
                formatedData.push(
                    <div key={randomId()} className="flex gap-2 pl-6">
                        <Image src={ICON[element.img]} alt="icon" />
                        <p>{element.name}</p>
                    </div>
                )
            } else {
                formatedData.push(
                    <p className="pl-6" key={randomId()}>
                        {element.name}
                    </p>
                )
            }
        }
    }

    return formatedData
}
