import React from 'react';
import ImageSectionLayout from '@/components/ImageSectionLayout/ImageSectionLayout';
import styles from './HitSection.module.scss';
import { ButtonLink } from '@/components/Button/Button';
import { useTranslations } from 'next-intl';

export default function HitSection() {
    const t = useTranslations('HIT');
    return (
        <ImageSectionLayout
            image={`featured-product-1.jpeg`}
            title={`${t('title')}`}
            description={`${t('subtitle')}`}
            className={styles.wrapper}
        >
            <p>
                {t('description')}
            </p>
            <ButtonLink href={'/posts/fotoomolozhenie-ipl'} variant='primary' className='self-center lg:self-start mt-4 lg:mt-auto'>{t('CTA title')}</ButtonLink>
        </ImageSectionLayout>
    )
}
