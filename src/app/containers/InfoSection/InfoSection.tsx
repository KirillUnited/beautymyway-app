import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';
import { CONTACTS } from '@/data';
import Socials from '@/components/Socials/Socials';

export default function InfoSection() {
    return (
        <section id='info' className={styles.root}>
            <div className={styles.wrapper}>
                <p className={styles.description}>Чтобы получить консультацию или записаться, пожалуйста, свяжитесь по указанному на сайте контактному номеру.</p>
                <Contacts className={styles.contacts} tel={CONTACTS.tel} address={CONTACTS.adress} time={CONTACTS.time} email={CONTACTS.email}/>
            </div>
        </section>
    )
}