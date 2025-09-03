import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import cn from 'classnames';
import styles from './Socials.module.scss';
import classNames from 'classnames'

interface ISocialsItemProps extends React.HTMLAttributes<HTMLDivElement> {
    item: string, value: any
}

export const SocialsItem = ({ item, value, className }: ISocialsItemProps): React.JSX.Element => {
    switch (item) {
        case 'instagram':
            return (
                <a href={value} target='_blank' className={classNames(`${styles.link}`, className)} aria-label={item}>
                    <FontAwesomeIcon icon={faInstagram} className={`${styles.icon}`} />
                </a>
            )
        case 'telegram':
            return (
                <a href={value} target='_blank' className={classNames(`${styles.link}`, className)} aria-label={item}>
                    <FontAwesomeIcon icon={faTelegram} className={`${styles.icon}`} />
                </a>
            )
        case 'whatsapp':
            return (
                <a href={value} target='_blank' className={classNames(`${styles.link}`, className)} aria-label={item}>
                    <FontAwesomeIcon icon={faWhatsapp} className={`${styles.icon}`} />
                </a>
            )
        default:
            return <></>;
    };
};

export default function Socials({ items, className }: any): React.JSX.Element {
    return (
        <ul className={cn(styles.list, className)}>
            {
                Object.entries(items).map(([keys, values], index) => {
                    return (
                        <li key={index}>
                            {
                                <SocialsItem item={keys} value={values} />
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}
