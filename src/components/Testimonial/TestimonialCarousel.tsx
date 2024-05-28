'use client'
import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import { TESTIMONIALS } from '@/data';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useFormatter, useTranslations } from 'next-intl';

export default function TestimonialCarousel() {
    const t = useTranslations('TESTIMONIALS.list');
    const format = useFormatter()
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const items = TESTIMONIALS.map((item, index) => {
        return (
            <Carousel.Slide key={index}>
                <p className='font-light italic mb-10 px-0 lg:px-12 lg:mb-0 text-center'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='mr-4 align-bottom' size='2x' />
                    {t(`${index + 1}.description`)}
                    <FontAwesomeIcon icon={faQuoteRight} className='ml-4 align-middle' size='2x' />
                </p>
            </Carousel.Slide>
        )
    });
    return (
        <Carousel
            plugins={[autoplay.current]}
            withIndicators={mobile}
            withControls={!mobile}
            className='max-w-2xl mx-auto mb-12'
            classNames={{
                indicator: styles.indicator,
            }}
        >
            {
                items
            }
        </Carousel>
    )
}
