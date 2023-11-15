import { withSectionLayout } from '@/app/layouts/SectionLayout';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';

const sectionProps = {
    title: 'Уникальные процедуры'
}

export const FeaturedProductsSection = withSectionLayout(FeaturedProducts, sectionProps);