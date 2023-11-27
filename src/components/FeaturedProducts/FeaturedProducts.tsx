import ProductsCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import ProductContext from '@/context/ProductContext';

export default function FeaturedProducts() {
    const { allProducts } = React.useContext<any>(ProductContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {
                allProducts.map((product: any) => {
                    const { link } = product;
                    const { thumb_image, title, description } = product.frontmatter;
                    return (
                        <Link href={link} key={title}>
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