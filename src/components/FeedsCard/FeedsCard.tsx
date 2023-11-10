import React from 'react';
import styles from './FeedsCard.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ProductsItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string,
    title: string,
    date?: string,
    description?: string
}

export default function ProductsItem({ image, title, description, date, className }: ProductsItemProps): React.JSX.Element {
    return (
        <div className={cn(`${styles.root} flexCol`, className)}>
            <Image
                src={`/images/${image}`}
                width={360}
                height={200}
                quality={60}
                alt={title}
                className={styles.image}
            />
            <div className={`${styles.body}`}>
                <h3 className={styles.title}>{title}</h3>
                {
                    description
                    &&
                    <p className={styles.description}>
                        <span className='line-clamp-4'>
                            {description}
                        </span>
                    </p>
                }
                {date && <p className='mt-3 font-light'>{date}</p>}
            </div>
            <div className={`${styles.footer}`}>
                <div className='flex items-center'>
                    <span className='text-sm'>Читать</span>
                    <FontAwesomeIcon icon={faArrowRight} size={'xs'} className='ml-1' />
                </div>
            </div>
        </div>
    )
}
