import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { useTranslations } from 'next-intl';

export default function HeroSection(): React.JSX.Element {
    const t = useTranslations('Hero');

    return (
        <section className={cn(styles.root)}>
            <Image
                fill
                src="/images/hero.jpg"
                // width={430}
                // height={696}
                alt="hero"
                priority
                className={`${styles['bg-image']}`}
            />
            <div className="container">
                <div className={`${styles.inner}`}>
                    <div className='flex flex-col items-center py-5 z-10'>
                        <h1 className={`${styles.title}`}>{t('title')}</h1>
                        <div className={styles.text}>
                            <p>{t('text')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
