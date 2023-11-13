import React from 'react';
import styles from './Team.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { TEAM } from '@/data';

interface TeamGrid extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function TeamGrid({ className }: TeamGrid): React.JSX.Element {
    const items = TEAM.map(({
        image,
        title
    }: {
        image: string,
        title: string
    }) => {
        return (
            <Image
                key={title}
                src={`/images/${image}`}
                width={360}
                height={200}
                quality={100}
                alt={title}
                className={styles.image}
            />
        )
    });

    return (
        <div className={cn(styles.grid, className)}>
            {items}
        </div>
    ) 
}