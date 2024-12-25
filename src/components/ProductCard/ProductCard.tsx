import React from 'react';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import {IProductCardProps} from './ProductCard.props';
import * as motion from 'framer-motion/client';
import {Variants} from "framer-motion";

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        scale: 0
    },
    onscreen: {
        opacity: 1,
        scale: 1
    }
};

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
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            transition={{
                delay: index * 0.25,
                duration: 0.6,
                ease: 'easeInOut',
            }}
            viewport={{once: true}}
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
