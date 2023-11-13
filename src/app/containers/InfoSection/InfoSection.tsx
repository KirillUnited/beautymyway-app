import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';

export default function InfoSection() {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <p className={styles.description}>Чтобы получить консультацию или записаться, пожалуйста, свяжитесь по указанному на сайте контактному номеру.</p>
                <Contacts className={styles.contacts} tel={`[+34 643 942 528, +34 643 939 409]`} address={'Valencia'} time={'Пн – Сб: 10:00 – 20:00'} />
            </div>
        </section>
    )
}
