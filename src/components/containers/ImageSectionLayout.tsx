import React from 'react';
import styles from './ImageSectionLayout.module.scss';
import Image from 'next/image';
import { ImageSectionLayoutProps } from './ImageSectionLayout.props';
import cn from 'classnames';

export default function ImageSectionLayout({ title, description, children, image, className }: ImageSectionLayoutProps): React.JSX.Element {
    return (
        <section className={styles.root}>
            <div className={cn(styles.wrapper, className)}>
                <div className='relative'>
                    <Image
                        src={image}
                        alt={title || 'Артур Сугако теперь и в Барселоне!'}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className={styles.content}>
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
                                <p className={styles.description}>
                                    {description}
                                </p>
                            }
                        </div>
                    }
                    {children}
                </div>
            </div>
        </section>
    )
}
