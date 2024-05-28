import { withSectionLayout } from '@/layouts/SectionLayout';
import Team from '@/components/Team/Team';

const sectionProps = {
    id: 'Team',
    title: 'Наша команда',
}

export const TeamSection = withSectionLayout(Team, sectionProps);
