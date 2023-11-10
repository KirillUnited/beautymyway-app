import ProductsItem from '@/components/ProductsItem/ProductsItem';
import Link from 'next/link';
import React from 'react';
import { PRODUCTS } from '@/data';

export default function ProductsSection(): React.JSX.Element {
    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>Какую проблему Вы хотите решить?</h2>
                <p className='section-description'>Мы заботимся о молодости вашей кожи и фигуры, используя современные методы лазерной, аппаратной и инъекционной косметологии.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {
                    PRODUCTS.map(({ image, title }, index) => {
                        return (
                            <Link href={'/'} key={index}>
                                <ProductsItem
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
