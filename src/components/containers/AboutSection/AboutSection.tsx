import React from 'react';
import ImageSectionLayout from '../ImageSectionLayout';
import Image from 'next/image';
import styles from './AboutSection.module.scss';
import classNames from 'classnames';

export default function AboutSection() {
    return (
        <ImageSectionLayout
            image={`about.png`}
            className={styles.wrapper}
        >
            <Image
                src={`/images/logo.svg`}
                width={262}
                height={61}
                alt='Артур Сугако теперь и в Барселоне!'
            />
            <div className="text-xl font-extralight italic p-3 text-center border border-primary my-4">
                Мы получаем вдохновение от красоты каждого клиента,<span className="font-normal"> который обращается к нам!</span>
            </div>
            <p>Мы <span className="font-semibold">ежедневно используем</span> наш накопленный опыт, лучшие методики и средства, чтобы помочь вам обнаружить и подчеркнуть вашу природную красоту и гармонию. Это позволяет нам внедрять передовые техники и протоколы лечения.</p>
        </ImageSectionLayout>
    )
}
