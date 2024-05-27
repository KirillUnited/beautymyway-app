import ProductCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { PRODUCTS } from '@/data';
import { useTranslations } from 'next-intl';

export default function ProductsSection(): React.JSX.Element {
    const t = useTranslations('Products');

    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>{t('title')}</h2>
                <p className='section-description'>{t('description')}</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {
                    PRODUCTS.map(({ image, title, link }, index) => {
                        return (
                            <Link href={link} key={index}>
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
