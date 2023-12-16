import ProductCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { PRODUCTS } from '@/data';

export default function ProductsSection(): React.JSX.Element {
    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>Какую проблему желаете решить?</h2>
                <p className='section-description'>Мы заботимся о молодости вашей кожи и фигуры, используя современные методы лазерной, аппаратной и инъекционной косметологии.</p>
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
