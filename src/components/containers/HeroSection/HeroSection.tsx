import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';

export default function HeroSection(): React.JSX.Element {
    return (
        <section className={styles.root}>
            <div className="container grid grid-cols-2 items-center gap-4">
                <div className='flex flex-col items-center text-center'>
                    <Image
                        src="/images/logo-light.svg"
                        width={160}
                        height={24}
                        alt="logo"
                    />
                    <div className={styles.text}>
                        <p className="font-normal">Красота – это свобода!</p>
                        <p>Так было сто лет назад – все</p>
                        <p>также и сегодня. Изменились</p>
                        <p>только <span className='font-normal'>технологии</span></p>
                    </div>
                    <Image
                        src="/images/signature.svg"
                        width={198}
                        height={76}
                        alt="logo"
                    />
                    <Image
                        src="/images/award.png"
                        width={230}
                        height={114}
                        alt="award"
                        className='mt-20'
                    />
                </div>

                <Image
                    src="/images/hero.png"
                    width={430}
                    height={696}
                    alt="hero"
                />
            </div>
        </section>
    )
}
