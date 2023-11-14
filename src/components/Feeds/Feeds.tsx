import FeedsCard from '@/components/FeedsCard/FeedsCard';
import Link from 'next/link';
import React from 'react';
import { FEEDS } from '@/data';
import styles from './Feeds.module.scss';

export default function Feeds(): React.JSX.Element {
    return (
        <div className={`${styles.content}`}>
            {
                FEEDS.map(({ image, title, description, date }, index) => {
                    return (
                        <Link href={'/'} key={index}
                              className={`${styles.item}`}>
                            <FeedsCard
                                image={image}
                                title={title}
                                description={description}
                                date={date}
                            />
                        </Link>
                    )
                })
            }

        </div>
    )
}
