import React from 'react';
import styles from './ProductsItem.module.scss';
import Image from 'next/image';

interface ProductsItemProps {
    image: string,
    title: string,
    description?: string
}

export default function ProductsItem({ image, title, description }: ProductsItemProps): React.JSX.Element {
    return (
        <div className={styles.root}>
            <Image
                src={`/images/${image}`}
                fill
                alt={title}
                className={styles.image}
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>
                    <span className='line-clamp-4'>
                        {description}
                    </span>
                </p>
            </div>
        </div>
    )
}
