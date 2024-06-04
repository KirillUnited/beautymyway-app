import ProductCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { PRODUCTS } from '@/data';
import { useLocale, useTranslations } from 'next-intl';
import { getPostsByCategory } from '@/lib/api/posts';

export default async function ProductsSection() {
    const locale = useLocale();
    const t = useTranslations('Products');
    const PRODUCTS = await getPostsByCategory(locale, 'products');

    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>{t('title')}</h2>
                <p className='section-description'>{t('description')}</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {
                    PRODUCTS?.map((item, index) => {
                        if(typeof item?.data?.category === 'undefined') {
                            return null
                        }
                        const image = item?.data?.hero_image;
                        const title = item?.data?.title;
                        const link = item?.data?.link;

                        return (
                            <Link href={link || '/'} key={index}>
                                <ProductCard
                                    image={image}
                                    title={title}
                                />
                            </Link>
                        )
                    })
                }

            </div>
        </section>
    )
}
