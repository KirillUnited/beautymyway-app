import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { ContactsProps } from './Contacts.props';
import cn from 'classnames';
import styles from './Contacts.module.scss';

export default function Contacts({ tel, address, time, className }: ContactsProps): React.JSX.Element {
    return (
        <div className={cn('contacts', className)}>
            {
                tel
                &&
                <Link href={`tel:${tel}`} className={`${styles.item} truncate`}>
                    <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                    {tel}
                </Link>
            }
            {
                address
                &&
                <p className={styles.item}>
                    <FontAwesomeIcon icon={faLocationDot} className='w-4 h-4' />
                    {address}
                </p>
            }
            {
                time
                &&
                <p className={styles.item}>
                    <FontAwesomeIcon icon={faClock} className='w-4 h-4' />
                    {time}
                </p>
            }
        </div>
    )
}
