import CheckBoxInput from '@/components/Client/CheckboxInput/CheckboxInput';
import Dropdown from '@/components/Client/Dropdown/Dropdown';

import React from 'react';
import reactLogo from '@/assets/img/react-logo.svg';
import htmlLogo from '@/assets/img/html5-logo.svg';
import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('Projects');
    return (
        <Dropdown title={t('title')} active={true} highlight={true}>
            <div className="px-8 py-4">
                <CheckBoxInput name="React" imgSrc={reactLogo} />
                <CheckBoxInput name="HTML" imgSrc={htmlLogo} />
            </div>
        </Dropdown>
    );
}
