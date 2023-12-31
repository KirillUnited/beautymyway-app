import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { TESTIMONIALS } from '@/data';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styles from './TestimonialsSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


export default function TestimonalsSection(): React.JSX.Element {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const items = TESTIMONIALS.map(({ image, title, subtitle, description }, index) => {
        return (
            <Carousel.Slide key={index}>
                <p className='font-light italic mb-10 px-0 lg:px-12 lg:mb-0 text-center'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='mr-4 align-bottom' size='2x'/>
                    {description}
                    <FontAwesomeIcon icon={faQuoteRight} className='ml-4 align-middle' size='2x' />
                </p>
            </Carousel.Slide>
        )
    });

    return (
        <section id='testimonials'>
            <div className="container">
                <div className='section-heading'>
                    <h2 className='section-title'>Отзывы</h2>
                </div>
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
            </div>
        </section>
    )
}