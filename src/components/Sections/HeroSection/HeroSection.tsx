import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import * as motion from 'framer-motion/client';
import {useTranslations} from "next-intl";

interface HeroSectionProps {
    title?: string;
    text?: string;
}

export default function HeroSection(): React.JSX.Element {
    const t = useTranslations('Hero');

    return (
        <section
            className={cn(styles.root)}
        >
            <motion.div
                animate={{
                    opacity: 1,
                }}
                initial={{
                    opacity: 0,
                }}
                transition={{duration: 1}}
                viewport={{amount: 0}}
                className={cn(styles.bgImageWrapper)}
            >
                <Image
                    fill
                    src="/images/hero.jpg"
                    alt="hero"
                    priority
                    className={`${styles['bg-image']}`}
                />
            </motion.div>
            <div className="container">
                <div className={`${styles.inner}`}>
                    <motion.div
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 120}}
                        transition={{duration: 0.5}}
                        viewport={{amount: 0}}
                        className='flex flex-col items-center py-5 z-10'
                    >
                        <h1 className={`${styles.title}`}>{t('title')}</h1>
                        <div className={styles.text}>
                            <p>{t('text')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
