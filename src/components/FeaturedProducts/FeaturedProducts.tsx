import ProductsCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { FEATURED_PRODUCTS } from '@/data';

export default function FeaturedProducts(): React.JSX.Element {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {
                FEATURED_PRODUCTS.map(({ image, title, description }, index) => {
                    return (
                        <Link href={'/'} key={index}>
                            <ProductsCard
                                variant='featured'
                                image={image}
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