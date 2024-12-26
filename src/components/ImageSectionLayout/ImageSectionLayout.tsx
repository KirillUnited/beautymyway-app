import React from 'react';
import styles from './ImageSectionLayout.module.scss';
import Image from 'next/image';
import { ImageSectionLayoutProps } from './ImageSectionLayout.props';
import cn from 'classnames';
import * as motion from 'framer-motion/client';

export default function ImageSectionLayout({ title, description, children, image, className }: ImageSectionLayoutProps): React.JSX.Element {
    return (
        <section className={styles.root}>
            <div className={cn(styles.wrapper, className)}>
                <motion.div
                    whileInView={{
                        opacity: 1,
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    transition={{duration: 1}}
                    viewport={{once: true,amount: 0}}
                    className='relative'>
                    <Image
                        src={`/images/${image}`}
                        width={700}
                        height={510}
                        alt={title || 'Beauty My Way'}
                        className='object-cover w-full h-full aspect-video'
                    />
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 120}}
                    transition={{duration: 0.5}}
                    viewport={{once: true, amount: 0}}
                    className={styles.content}>
                    {
                        title
                        &&
                        <div className={styles.heading}>
                            <h2 className={styles.title}>
                                {title}
                            </h2>
                            {
                                description
                                &&
                                <h3 className={styles.description}>
                                    {description}
                                </h3>
                            }
                        </div>
                    }
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
