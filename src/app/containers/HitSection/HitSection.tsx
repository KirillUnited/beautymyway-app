import React from 'react';
import ImageSectionLayout from '../ImageSectionLayout';
import styles from './HitSection.module.scss';
import Button from '@/components/Button/Button';

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
            <Button variant='primary' className='self-center lg:self-start mt-4 lg:mt-auto'>Детальнее о процедуре</Button>
        </ImageSectionLayout>
    )
}
