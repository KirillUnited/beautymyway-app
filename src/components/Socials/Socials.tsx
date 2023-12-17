import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import cn from 'classnames';
import styles from './socials.module.scss'

interface ISocialsItemProps {
    item: string, value: any
}

export const SocialsItem = ({ item, value }: ISocialsItemProps): React.JSX.Element => {
    switch (item) {
        case 'instagram':
            return (
                <a href={value} target='_blank' className={`${styles.link}`}>
                    <FontAwesomeIcon icon={faInstagram} className={`${styles.icon}`} />
                </a>
            )
        case 'telegram':
            return (
                <a href={value} target='_blank' className={`${styles.link}`}>
                    <FontAwesomeIcon icon={faTelegram} className={`${styles.icon}`} />
                </a>
            )
        case 'whatsapp':
            return (
                <a href={value} target='_blank' className={`${styles.link}`}>
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
