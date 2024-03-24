import dropDownDatas from '@/data/dropDownMenu.json';
import { useTranslations } from 'use-intl';

type AboutContentProps = {
    currentDropDown: string;
};

export default function AboutContent({ currentDropDown }: AboutContentProps) {
    const dropdownTranslations = useTranslations('Dropdown');
    const aboutContentTranslations = useTranslations('About_Content');
    const mainDropDownData = dropDownDatas[Number.parseInt(currentDropDown)];
    const id = Number.parseInt(currentDropDown);

    const mainDropDownContent: React.JSX.Element[] = [];
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
                    <h2>
                        {'// ' + dropdownTranslations(mainDropDownData.title)}
                    </h2>
                    <h3 className=" text-slate-500 ml-2">
                        {/* Ne pas utiliser l'index du folder pour chercher dans folder.content CONNARD*/}
                        {'/' + dropdownTranslations(folder.title)}
                    </h3>
                </div>
                {generateFileContent(index)}
            </div>
        );
    });

    function generateFileContent(folderIndex: number) {
        const personnal = ['who-i-am', ''];
        const pFileList: React.JSX.Element[] = [];
        dropDownDatas[id].content[folderIndex].content.forEach(
            (item, index) => {
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
                            {dropdownTranslations(item.title) + '()'}
                            <span className="text-[#ebc334] ml-2">{'{'}</span>
                        </h2>
                        <p className=" whitespace-pre-line">
                            {aboutContentTranslations(
                                dropDownDatas[id].title + '.' + item.title
                            )}
                        </p>
                        <h2 className="text-[#ebc334]">{'}'}</h2>
                    </div>
                );
            }
        );
        return pFileList;
    }

    return <div>{mainDropDownContent}</div>;
}
