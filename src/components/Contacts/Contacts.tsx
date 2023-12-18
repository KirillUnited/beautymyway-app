import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { ContactsProps } from './Contacts.props';
import cn from 'classnames';
import styles from './Contacts.module.scss';
import Socials from '../Socials/Socials';
import { CONTACTS } from '@/data'

export default function Contacts({ tel, address, time, email, className }: ContactsProps): React.JSX.Element {
    return (
        <ul className={cn(styles.root, className)}>
            {
                (tel && tel.length > 0)
                &&
                tel.map((item, index) => {
                    const items = {
                        'instagram': `${CONTACTS.socials.instagram[index]}`,
                        'telegram': `${CONTACTS.socials.telegram[index]}`,
                        'whatsapp': `${CONTACTS.socials.whatsapp[index]}`,
                    };

                    return (
                        <li className={`${styles.item} truncate`} key={item}>
                            <Socials items={items} />
                            <Link href={`tel:${item}`} className={`flex items-center gap-3 lg:gap-4`}>
                                <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                                <span>{item}</span>
                            </Link>
                        </li>
                    )
                })
            }
            {
                email
                &&
                <li>
                    <Link href={`mailto:${email}`} className={`${styles.item} truncate`}>
                        <FontAwesomeIcon icon={faEnvelope} className='w-4 h-4' />
                        {email}
                    </Link>
                </li>
            }
            {
                address
                &&
                <li className={styles.item}>
                    <FontAwesomeIcon icon={faLocationDot} className='w-4 h-4' />
                    {address}
                </li>
            }
            {
                time
                &&
                <li className={styles.item}>
                    <FontAwesomeIcon icon={faClock} className='w-4 h-4' />
                    {time}
                </li>
            }
            <li>
                <a href='https://n827290.alteg.io/' className='underline'>Онлайн-запись</a>
            </li>
        </ul>
    )
}
