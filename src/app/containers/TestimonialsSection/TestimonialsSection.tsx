import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageSectionLayout from '../ImageSectionLayout';
import styles from './TestimonialsSection.module.scss';
import { TESTIMONIALS } from '@/data';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function TestimonalsSection(): React.JSX.Element {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const items = TESTIMONIALS.map(({ image, title, subtitle, description }, index) => {
        return (
            <Carousel.Slide key={index}>
                <ImageSectionLayout
                    image={image}
                    title={title}
                    description={subtitle}
                    className={`${styles.wrapper}`}
                >
                    <p className='line-clamp-4'>
                        {description}
                    </p>
                </ImageSectionLayout>
            </Carousel.Slide>
        )
    });

    return (
        <>
            <div className="container">
                <div className='section-heading pb-0'>
                    <h2 className='section-title'>Отзывы</h2>
                </div>
            </div>
            <Carousel
                plugins={[autoplay.current]}
                withIndicators={mobile}
                withControls={!mobile}
            >
                {
                    items
                }
            </Carousel>
        </>
    )
}