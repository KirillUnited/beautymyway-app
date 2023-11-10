import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import cn from 'classnames';

export default function HeroSection(): React.JSX.Element {
    return (
        <section className={cn(styles.root)}>
            <div className="container">
                <div className="relative grid grid-cols-1 md:grid-cols-2 items-center lg:gap-14 max-w-5xl mx-auto">
                    <div className='flex flex-col items-center text-center py-5 z-10 max-w-[75%] md:max-w-full'>
                        <Image
                            src="/images/logo-light.svg"
                            width={160}
                            height={24}
                            alt="logo"
                        />
                        <div className={styles.text}>
                            <p className="font-normal">Свобода - это красота.</p>
                            <p>Столетие назад и сегодня</p>
                            <p>эта истина остается неизменной,</p>
                            <p>лишь средства для достижения красоты претерпели <span className='font-normal'>изменения</span></p>
                        </div>
                        <Image
                            src="/images/signature.svg"
                            width={198}
                            height={76}
                            alt="logo"
                            className='max-w-[9rem] lg:max-w-full'
                        />
                    </div>

                    <Image
                        src="/images/hero.png"
                        width={430}
                        height={696}
                        alt="hero"
                        priority
                        className={`${styles['bg-image']}`}
                    />
                </div>
            </div>
        </section>
    )
}