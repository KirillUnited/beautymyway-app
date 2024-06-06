import React from 'react';
import Image from 'next/image';
import {Link} from '@/i18n.config';
import Contacts from '@/components/Contacts/Contacts';
import { CONTACTS, LINKS } from '@/data';
import { useTranslations } from 'next-intl';

type linksCategoryType = 'О нас' | 'Услуги';

const getLinks = (name: linksCategoryType) => {
    const links = LINKS.filter((item) => {
        if (item.label === name) return item;
    })[0].links?.map((item) => (
        <li key={item.label}>
            <Link href={item.link} className='linkHover inline-block'>{item.label}</Link>
        </li>
    ));

    return links;
}

export default function Footer() {
    const t = useTranslations('Header.navbar');

    return (
        <footer className="flex flex-col gap-10 bg-foregroundDark py-6">
            <div className="container flex flex-wrap flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
                <div className='flex flex-col items-center md:items-start gap-6 order-1 sm:order-none'>
                    <Link href={'/'} className={`logo`}>
                        <Image
                            src={`/images/logo-color.png`}
                            width={52}
                            height={52}
                            alt='Артур Сугако теперь и в Барселоне!'
                            className='max-w-[52px]'
                        />
                    </Link>
                    <Contacts className='flex flex-col items-center md:items-start gap-2 text-center' tel={CONTACTS.tel} address={CONTACTS.adress} time={CONTACTS.time} email={CONTACTS.email} />
                </div>
                <ul className="flex flex-col font-light leading-normal gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold leading-7">{t('aboutUs.label')}</span>
                    {getLinks('О нас')}
                </ul>
                <ul className="flex flex-col font-light leading-normal gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold leading-7">{t('services.label')}</span>
                    {getLinks('Услуги')}
                </ul>
            </div>
            <div className="container">
                <div className="text-center leading-[115%] text-sm font-light">
                    <p className="text-secondary">© {new Date().getFullYear()} Beautymyway.</p>
                </div>
            </div>
        </footer>
    )
}
