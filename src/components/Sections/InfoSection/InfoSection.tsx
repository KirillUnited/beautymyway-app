import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';
import { CONTACTS } from '@/data';
import { useTranslations } from 'next-intl';

export default function InfoSection() {
    const t = useTranslations('Info');

    return (
        <section id='info' className={styles.root}>
            <div className={styles.wrapper}>
                <p className={styles.description}>{t('description')}</p>
                <Contacts className={styles.contacts} tel={CONTACTS.tel} address={CONTACTS.adress} time={CONTACTS.time} email={CONTACTS.email} />
            </div>
        </section>
    )
}