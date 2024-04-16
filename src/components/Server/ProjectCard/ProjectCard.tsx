type ProjectCardPropsType = {
    project: {
        id: number;
        title: string;
        github: string;
        techs: string[];
        translationKey: string;
        path: string;
    };
};

export default function ProjectCard({ project }: ProjectCardPropsType) {
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex gap-1">
                <p className=" text-[#5565E8] font-bold">
                    Project{' ' + project.id}
                </p>
                <p className="text-[#607B96]"> {' / ' + project.title}</p>
            </div>
            <div
                key={project.title}
                className="border rounded-xl w-full h-96 overflow-hidden"
            >
                <p>{project.github}</p>
            </div>
        </div>
    );
}
