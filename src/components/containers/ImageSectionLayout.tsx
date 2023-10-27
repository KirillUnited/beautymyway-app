import React from 'react';
import styles from './ImageSectionLayout.module.scss';
import Image from 'next/image';
import { ImageSectionLayoutProps } from './ImageSectionLayout.props';

export default function SectionLayout({ title, description, children, image }: ImageSectionLayoutProps): React.JSX.Element {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <Image
                    src={image}
                    width={700}
                    height={510}
                    alt={title}
                />
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
