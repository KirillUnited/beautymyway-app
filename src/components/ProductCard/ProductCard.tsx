import React from 'react';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import {IProductCardProps} from './ProductCard.props';
import * as motion from 'framer-motion/client';

export default function ProductCard({
                                        image,
                                        title,
                                        description,
                                        variant = 'default',
                                        className,
                                        index
                                    }: IProductCardProps): React.JSX.Element {
    return (
        <motion.div
            animate={{
                opacity: 1,
            }}
            initial={{
                opacity: 0,
            }}
            transition={{
                delay: index * 0.25,
                duration: 0.5
            }}
            viewport={{amount: 0}}
            className={cn(styles.root,
                className,
                {
                    [styles.featured]: variant === 'featured'
                }
            )}
        >
            <Image
                fill
                src={`/images/posts/${image}`}
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={60}
                alt={`${title}`}
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
        </motion.div>
    )
}
