import Dropdown from '@/components/Client/Dropdown/Dropdown';

import React from 'react';
import { useTranslations } from 'next-intl';
import ProjectsFilter from '@/components/ProjectsFilter/ProjectsFilter';

export default function Projects() {
    const t = useTranslations('Projects');
    return (
        <>
            <Dropdown title={t('title')} active={true} highlight={true}>
                <ProjectsFilter />
            </Dropdown>
        </>
    );
}
