import FeedsItem from '@/components/FeedsItem/FeedsItem';
import Link from 'next/link';
import React from 'react';
import { FEEDS } from '@/data';
import styles from './FeedsSection.module.scss';

export default function FeedsSection(): React.JSX.Element {
    return (
        <section className='pb-4'>
            <div className='container'>
                <div className='section-heading'>
                    <h2 className='section-title'>Последние новости</h2>
                </div>
                <div className={`${styles.content}`}>
                    {
                        FEEDS.map(({ image, title, description, date }, index) => {
                            return (
                                <Link href={'/'} key={index}
                                    className={`${styles.item}`}>
                                    <FeedsItem
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
            </div>
        </section>
    )
}
