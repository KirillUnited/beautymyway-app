import React from 'react';
import ImageSectionLayout from '@/components/ImageSectionLayout/ImageSectionLayout';
import styles from './AboutSection.module.scss';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('About');

    return (
        <ImageSectionLayout
            image={`about.jpeg`}
            className={styles.wrapper}
        >
            <div className="text-xl font-extralight italic p-3 text-center border border-primary my-4" dangerouslySetInnerHTML={{ __html: t.raw("slogan") }} />
            <p dangerouslySetInnerHTML={{ __html: t.raw("description") }} />
        </ImageSectionLayout>
    )
}
