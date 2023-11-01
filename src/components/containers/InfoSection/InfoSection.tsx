import React from 'react';
import Button from '@/components/Button/Button';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';

export default function InfoSection() {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Dr.Dudikova Clinic теперь и в Барселоне!</h2>
                <p className={styles.description}>Чтобы получить консультацию или записаться, пожалуйста, свяжитесь по указанному на сайте контактному номеру. Информацию о ценах на услуги можно найти ниже.</p>
                <Contacts className={styles.contacts} tel={`+34 601 500 379`} address={'Barcelona, Carrer de Bertrand i Serra, 12'} time={'Пн – Сб: 10:00 – 20:00'} />
                <Button variant='primary' className={styles.button}>Услуги</Button>
            </div>
        </section>
    )
}
