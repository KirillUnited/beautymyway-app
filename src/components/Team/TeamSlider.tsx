import React from 'react';
import styles from './Team.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { TEAM } from '@/data';
import { Carousel } from '@mantine/carousel';

interface TeamSlider extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function TeamSlider({ className }: TeamSlider): React.JSX.Element {
    const items = TEAM.map(({
        image,
        title
    }: {
        image: string,
        title: string
    }) => {
        return (
            <Carousel.Slide key={title}>
                <Image
                    src={`/images/${image}`}
                    width={360}
                    height={200}
                    alt={title}
                    quality={75}
                    className={styles['slider-image']}
                />
            </Carousel.Slide>
        )
    });

    return (
        <Carousel
            withIndicators
            withControls
            className={cn(styles.slider, className)}
            classNames={{
                indicator: styles.indicator,
                indicators: styles.indicators,
            }}
        >
            {
                items
            }
        </Carousel>
    )
}