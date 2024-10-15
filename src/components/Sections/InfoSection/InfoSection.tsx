import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import styles from './InfoSection.module.scss';
import { CONTACTS } from '@/data';
import { useTranslations } from 'next-intl';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import classNames from 'classnames';

export default function InfoSection() {
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
                    <div className='w-full bg-slate-300'>
                        <GoogleMapsEmbed
                            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                            width="100%"
                            height={500}
                            mode="place"
                            q="Brooklyn+Bridge,New+York,NY"
                            language='es'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}