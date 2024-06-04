// 'use client'
import ProductsCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { useLocale } from 'next-intl';
import { getFeaturedProductPosts } from '@/lib/api';

export default async function FeaturedProducts() {
    const locale = await useLocale();
	const allProducts = await getFeaturedProductPosts(locale);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {
                allProducts.map((product: any) => {
                    const { link } = product;
                    const { thumb_image, title, description, path } = product.frontmatter;
                    return (
                        <Link href={path || link} key={title}>
                            <ProductsCard
                                variant='featured'
                                image={thumb_image}
                                title={title}
                                description={description}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}