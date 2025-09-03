import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n.config';
import Contacts from '@/components/Contacts/Contacts';
import { CONTACTS, LINKS } from '@/data';
import { useTranslations } from 'next-intl';

type linksCategoryType = 'aboutUs' | 'services';

const useNavbarLinks = (name: linksCategoryType) => {
    const t = useTranslations(`Header.navbar.${name}.menuItems`);
    const links = LINKS.filter((item) => {
        if (item.name === name) return item;
    })[0].links?.map((item) => {
        if (typeof item?.name === 'undefined') return null;
        return (
            <li key={item.label}>
                <Link href={item.link} className='linkHover inline-block'>{t(`${item.name}.label`)}</Link>
            </li>
        )
    });

    return links;
}

export default function Footer() {
    const t = useTranslations('Header.navbar');

    return (
        <footer className="flex flex-col gap-10 bg-foregroundDark py-6">
            <div
                className="container flex flex-wrap flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
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
                    <Contacts className='flex flex-col items-center md:items-start gap-2 text-center' tel={CONTACTS.tel}
                              address={CONTACTS.adress} time={CONTACTS.time} email={CONTACTS.email}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className="text-lg uppercase font-light leading-7">{t('aboutUs.label')}</span>
                    <ul className="flex flex-col leading-normal gap-2 text-center md:text-left">
                        {useNavbarLinks('aboutUs')}
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className="text-lg uppercase font-light leading-7">{t('services.label')}</span>
                    <ul className="flex flex-col leading-normal gap-2 text-center md:text-left">
                        {useNavbarLinks('services')}
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="text-center leading-[115%] text-sm font-light">
                    <p className="text-secondary">© {new Date().getFullYear()} Beautymyway.</p>
                </div>
            </div>
        </footer>
    )
}
