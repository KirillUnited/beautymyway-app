import ProductsItem from '@/components/ProductsItem/ProductsItem';
import Link from 'next/link';
import React from 'react';

const products = [
    {
        image: 'featured-product-1.jpeg',
        title: 'пигментные пятна',
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'акне',
    },
    {
        image: 'featured-product-1.jpeg',
        title: 'мимические морщины',
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'убрать дряблость кожи',
    },
    {
        image: 'featured-product-1.jpeg',
        title: 'круги под глазами',
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'гипергидроз',
    },
    {
        image: 'featured-product-1.jpeg',
        title: 'Диодный лазер и DPL',
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'аппаратный массаж',
    },
];

export default function ProductsSection(): React.JSX.Element {
    return (
        <section>
            <div className='section-heading container'>
                <h2 className='section-title'>Какую проблему Вы хотите решить?</h2>
                <p className='section-description'>Мы заботимся о молодости вашей кожи и фигуры, используя современные методы лазерной, аппаратной и инъекционной косметологии.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {
                    products.map(({ image, title }, index) => {
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
