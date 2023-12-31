import React from 'react';
import ImageSectionLayout from '@/components/ImageSectionLayout/ImageSectionLayout';
import styles from './HitSection.module.scss';
import { ButtonLink } from '@/components/Button/Button';

export default function HitSection() {
    return (
        <ImageSectionLayout
            image={`featured-product-1.jpeg`}
            title='Процедура месяца'
            description='Фотолечение и Фотоомоложение (IPL)'
            className={styles.wrapper}
        >
            <p>
            Фотоомоложение представляет собой медицинскую процедуру, направленную на предотвращение и устранение признаков фотостарения кожи. Эффективная и неинвазивная, эта технология осуществляется с использованием высокоинтенсивных источников света (IPL), представляя собой одно из наиболее перспективных направлений в области эстетической медицины.
            </p>
            <ButtonLink href={'/posts/fotoomolozhenie-ipl'} variant='primary' className='self-center lg:self-start mt-4 lg:mt-auto'>Детальнее о процедуре</ButtonLink>
        </ImageSectionLayout>
    )
}
