import {SectionLayout, withSectionLayout} from '@/layouts/SectionLayout';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import {useTranslations} from "next-intl";

export const FeaturedProductsSection = ()=>{
    const t = useTranslations('FeaturedProducts');

    return (
        <SectionLayout id='featured-products' title={t('title')}>
            <FeaturedProducts/>
        </SectionLayout>
    )
};