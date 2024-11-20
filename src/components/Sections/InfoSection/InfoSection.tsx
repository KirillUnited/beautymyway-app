import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';
import { CONTACTS } from '@/data';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { mapConfig } from '@/config/map';
import { MapFrame } from '@/components/widgets/map';

export default function InfoSection({ locale }: { locale: string }) {
    const t = useTranslations('Info');

    return (
        <section id='info' className={styles.root}>
            <div className="container">
                <div className={classNames(styles.wrapper)}>
                    <div className='section-heading'>
                        <h2 className='section-title'>{t('title')}</h2>
                    </div>
                    <p className={styles.description}>{t('description')}</p>
                    <Contacts className={styles.contacts} tel={CONTACTS.tel} address={CONTACTS.adress} time={CONTACTS.time} email={CONTACTS.email} />
                    <MapFrame containerStyle={mapConfig.containerStyle} />
                </div>
            </div>
        </section>
    )
}