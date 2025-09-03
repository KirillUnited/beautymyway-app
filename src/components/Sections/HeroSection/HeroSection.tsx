import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import heroPic from '../../../../public/images/hero.jpg';
import cn from 'classnames';
import * as motion from 'framer-motion/client';
import {useTranslations} from "next-intl";

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
                transition={{duration: 1, delay: 1}}
                viewport={{once: true,amount: 0}}
                className={cn(styles.bgImageWrapper)}
            >
                <Image
                    fill
                    src={heroPic}
                    placeholder={'blur'}
                    alt={`${t('title')}`}
                    priority
                    quality={90}
                    className={`${styles['bg-image']}`}
                />
            </motion.div>
            <div className="container">
                <div className={`${styles.inner}`}>
                    <motion.div
                        animate={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -120}}
                        transition={{duration: 1}}
                        viewport={{once: true, amount: 0}}
                        className='flex flex-col py-5 z-10'
                    >
                        <h1 className={`${styles.title}`}>{t('title')}</h1>
                        <motion.div
                            animate={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -120}}
                            transition={{duration: 1, delay: 0.5}}
                            viewport={{once: true, amount: 0}}
                            className={styles.text}>
                            <p>{t('text')}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
