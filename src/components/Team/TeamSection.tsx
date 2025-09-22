import {SectionLayout, withSectionLayout} from '@/layouts/SectionLayout';
import Team from '@/components/Team/Team';
import {useTranslations} from "next-intl";

export const TeamSection = () => {
    const t = useTranslations('Team');
    return (
        <SectionLayout id='team' title={t('title')}>
            <Team/>
        </SectionLayout>
    )
};
