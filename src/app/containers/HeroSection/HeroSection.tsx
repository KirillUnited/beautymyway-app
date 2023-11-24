import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import cn from 'classnames';

export default function HeroSection(): React.JSX.Element {
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
                <div className={`${styles.inner} relative grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:gap-14 max-w-5xl mx-auto`}>
                    <div className='flex flex-col items-center py-5 z-10'>
                        <div className={styles.text}>
                            <p className="font-normal">Свобода - это красота.</p>
                            <p>Столетие назад и сегодня</p>
                            <p>эта истина остается неизменной,</p>
                            <p>лишь средства для достижения красоты претерпели <span className='font-normal'>изменения</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
