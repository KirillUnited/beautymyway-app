import ProductCard from '@/components/ProductCard/ProductCard';
import { Link } from '@/i18n.config';
import React from 'react';
import { getPosts } from '@/lib/api/posts';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function ProductsSection() {
    const locale = await getLocale();
    const t = await getTranslations('Products');
    const posts = await getPosts(locale);
    const PRODUCT_POST_LIST = posts.filter((product) => {
        const category = product?.data?.category;

        if ((typeof category !== 'undefined') && (category === 'products')) {
            return product
        }
    });

    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>{t('title')}</h2>
                <p className='section-description'>{t('description')}</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {
                    PRODUCT_POST_LIST?.map((item, index) => {
                        const data = item?.data;

                        return (
                            <Link href={data?.link || '/'} key={index}>
                                <ProductCard
                                    image={data?.hero_image}
                                    title={data?.title}
                                    index={index}
                                />
                            </Link>
                        )
                    })
                }

            </div>
        </section>
    )
}
