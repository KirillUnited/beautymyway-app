import React from 'react';
import styles from './product-card.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { IProductCardProps } from './ProductCard.props';

export default function ProductCard({ image, title, description, variant = 'default', className }: IProductCardProps): React.JSX.Element {
    return (
        <div className={cn(styles.root,
            className,
            {
                [styles.featured]: variant === 'featured'
            }
        )}>
            <Image
                fill
                src={`/images/${image}`}
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={60}
                alt={title}
                className={styles.image}
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {
                    description
                    &&
                    <p className={styles.description}>
                        <span className='line-clamp-4'>
                            {description}
                        </span>
                    </p>
                }
            </div>
        </div>
    )
}
