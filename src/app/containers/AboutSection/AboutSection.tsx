import React from 'react';
import ImageSectionLayout from '@/components/ImageSectionLayout/ImageSectionLayout';
import styles from './AboutSection.module.scss';

export default function AboutSection() {
    return (
        <ImageSectionLayout
            image={`about.jpeg`}
            className={styles.wrapper}
        >
            <div className="text-xl font-extralight italic p-3 text-center border border-gray-400 my-4">
                Мы получаем вдохновение от красоты каждого клиента,<span className="font-normal"> который обращается к нам!</span>
            </div>
            <p>Мы <span className="font-semibold">ежедневно используем</span> наш накопленный опыт, лучшие методики и средства, чтобы помочь вам обнаружить и подчеркнуть вашу природную красоту и гармонию. Это позволяет нам внедрять передовые техники и протоколы лечения.</p>
        </ImageSectionLayout>
    )
}
