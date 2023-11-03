import ProductsItem from '@/components/ProductsItem/ProductsItem';
import Link from 'next/link';
import React from 'react';

const products = [
    {
        image: 'featured-product-1.jpeg',
        title: 'Фотолечение и Фотоомоложение (DPL)',
        description: 'Repellendus est voluptas officia.'
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'Компрессионно-вибрационный массаж',
        description: 'Одним из наиболее инновационных методов возвращения молодости и борьбы с возрастными изменениями'
    },
    {
        image: 'featured-product-1.jpeg',
        title: 'Ботулинотерапия',
        description: 'Aut laboriosam officiis cupiditate id. Nisi voluptatem voluptatibus.'
    },
    {
        image: 'featured-product-2.jpeg',
        title: 'Биоревитализация',
        description: 'Inventore ut atque distinctio laboriosam consequatur praesentium eos. Fugit nostrum odit quis adipisci. Consequatur voluptatibus perspiciatis possimus non beatae aut. Eum qui perferendis dolores. Velit minus ea tempore rerum ipsa sed.'
    },
]

export default function FeaturedProductsSection(): React.JSX.Element {
    return (
        <section className='pb-4'>
            <div className='container'>
                <div className='section-heading'>
                    <h2 className='section-title'>Уникальные процедуры</h2>
                    <p className='section-description'>Мы ценим время наших пациентов и предлагаем ряд косметологических услуг с wow-эффектом!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                    {
                        products.map(({ image, title, description }, index) => {
                            return (
                                <Link href={'/'} key={index}>
                                    <ProductsItem
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
            </div>
        </section>
    )
}
