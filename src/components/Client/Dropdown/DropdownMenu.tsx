import Dropdown from './Dropdown';
import orangeFolder from '@/assets/img/orange-folder.svg';
import greenFolder from '@/assets/img/green-folder.svg';
import foodUp from '@/assets/img/food-up.svg';
import blueFolder from '@/assets/img/blue-folder.svg';
import fileSvg from '@/assets/img/file.svg';
import chevron from '@/assets/img/chevron.svg';
import Image from 'next/image';
import schemaData from '@/data/dropDownMenu.json';
import { useTranslations } from 'next-intl';

type schemaDataType = {
    title: string;
    img: string;
    chevron: boolean;
    content: schemaDataType[];
};

type DropDownMenuType = {
    setCurrentDropDown: React.Dispatch<React.SetStateAction<string>>;
    currentDropDown: string;
};

export default function DropDownMenu({
    setCurrentDropDown,
    currentDropDown,
}: DropDownMenuType) {
    // change the content and the active dropdown on click on one of them

    const t = useTranslations('Dropdown');
    function handleClick(id: string) {
        setCurrentDropDown(id);
    }

    let dropDownList: React.JSX.Element[] = [];
    for (let dropDown of schemaData) {
        dropDownList.push(
            <Dropdown
                key={
                    Math.trunc(Math.random() * 999999999) +
                    dropDown.title +
                    '-dropdown'
                }
                id={schemaData.indexOf(dropDown).toString()}
                title={t(dropDown.title)}
                highlight={true}
                active={
                    currentDropDown === schemaData.indexOf(dropDown).toString()
                        ? true
                        : false
                }
                className="ml-5"
                onClick={handleClick}
            >
                <BuildMenu currentItem={dropDown} />
            </Dropdown>
        );
    }

    return dropDownList;
}

type ComposedTitleProps = {
    img: any;
    title: string;
};

function ComposedTitle({ img, title }: ComposedTitleProps) {
    const t = useTranslations('Dropdown');
    return (
        <div className="flex gap-2 ">
            <Image src={img} alt="title" />
            <p>{t(title)}</p>
        </div>
    );
}

type BuildMenuType = {
    currentItem: schemaDataType;
};

function BuildMenu({ currentItem }: BuildMenuType) {
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
                key={Math.trunc(Math.random() * 999) + item.title + '-dropdown'}
                title={ComposedTitle({
                    img: image,
                    title: item.title,
                })}
                indicator={item.chevron ? chevron : foodUp}
                active={item.title === 'bio' ? true : false}
                className="ml-5"
            >
                <BuildMenu currentItem={item} />
            </Dropdown>
        );
    }

    return builded;
}
