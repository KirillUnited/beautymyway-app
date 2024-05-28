import { withSectionLayout } from '@/layouts/SectionLayout';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';

const sectionProps = {
    id: 'FeaturedProducts',
    title: 'Уникальные процедуры'
}

export const FeaturedProductsSection = withSectionLayout(FeaturedProducts, sectionProps);