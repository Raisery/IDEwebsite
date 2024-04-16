'use client';

import CheckBoxInput from '@/components/Client/CheckboxInput/CheckboxInput';
import { useState } from 'react';
import projectsData from '@/data/projectsData.json';
import reactLogo from '@/assets/img/filters_icon/react_logo.svg';
import cssLogo from '@/assets/img/filters_icon/css_logo.svg';
import tailwindLogo from '@/assets/img/filters_icon/tailwind_logo.svg';
import jsLogo from '@/assets/img/filters_icon/js_logo.svg';
import tsLogo from '@/assets/img/filters_icon/ts_logo.svg';
import nextjsLogo from '@/assets/img/filters_icon/nextjs_logo.svg';
import sassLogo from '@/assets/img/filters_icon/sass_logo.svg';
import htmlLogo from '@/assets/img/filters_icon/html_logo.svg';
import ProjectCard from '../Server/ProjectCard/ProjectCard';

const svgs = [
    { name: 'React', svg: reactLogo },
    { name: 'CSS', svg: cssLogo },
    { name: 'Tailwind', svg: tailwindLogo },
    { name: 'JavaScript', svg: jsLogo },
    { name: 'TypeScript', svg: tsLogo },
    { name: 'NextJS', svg: nextjsLogo },
    { name: 'Sass', svg: sassLogo },
    { name: 'HTML', svg: htmlLogo },
];

export default function ProjectsFilter() {
    const [filters, setFilters] = useState(
        projectsData.filters.list.map((filter) => {
            return { name: filter.name, isActive: true };
        })
    );

    function toggleFilter(filter: string): void {
        const filterIndex = filters.findIndex((item) => item.name === filter);
        const newFilters = [] as typeof filters;
        filters.forEach((item) => newFilters.push(item));
        newFilters[filterIndex].isActive = !newFilters[filterIndex].isActive;
        setFilters(newFilters);
    }

    return (
        <div className="px-8 py-4 text-white flex flex-col gap-3">
            {projectsData.filters.list.map((filter) => {
                const img = svgs.find((item) => item.name === filter.name);
                return (
                    <CheckBoxInput
                        key={filter.name}
                        name={filter.name}
                        imgSrc={img?.svg}
                        onCheck={() => toggleFilter(filter.name)}
                    />
                );
            })}
            {/* test */}

            {filters.map((item) => {
                return item.isActive ? item.name + ' ' : '';
            })}
            <div className="flex flex-wrap gap-6">
                {projectsData.projects.map((item) => {
                    let display = false;
                    for (let filter of filters) {
                        if (
                            item.techs.includes(filter.name) &&
                            filter.isActive
                        ) {
                            display = true;
                        }
                    }
                    if (display)
                        return <ProjectCard key={item.title} project={item} />;
                })}
            </div>
        </div>
    );
}
