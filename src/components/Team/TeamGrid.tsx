import React from 'react';
import styles from './Team.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import {TEAM} from '@/data';
import * as motion from 'framer-motion/client';
import {Variants} from "framer-motion";

interface TeamGrid extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const animateVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: -150
    },
    onscreen: {
        opacity: 1,
        x: 0
    }
};

export default function TeamGrid({className}: TeamGrid): React.JSX.Element {
    const items = TEAM.map(({
                                image,
                                title
                            }: {
        image: string,
        title: string
    }, index) => {
        return (
            <motion.div
                key={index}
                variants={animateVariants}
                initial="offscreen"
                whileInView="onscreen"
                transition={{
                    delay: index * 0.25,
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                viewport={{once: true}}
                className={styles['image-wrapper']}
            >
                <Image
                    className={styles.image}
                    src={`/images/${image}`}
                    width={360}
                    height={200}
                    quality={75}
                    alt={title}

                />
            </motion.div>
        )
    });

    return (
        <div className={cn(styles.grid, className)}>
            {items}
        </div>
    )
}