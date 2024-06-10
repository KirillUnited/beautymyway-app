import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    Group,
    rem,
} from '@mantine/core';
import HeaderMenu from './HeaderMenu';
import styles from './Header.module.scss';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeaderDrawer from './HeaderDrawer';
import { getLocale, getTranslations } from 'next-intl/server';
import LocaleSwitcher from '../LanguageSwitcher/LocaleSwitcher';

export default async function Header() {
    const currentLocale = await getLocale();
    const t = await getTranslations('Header.navbar');
    const translatedNavbar = {
        "services": {
            "label": t('services.label'),
            "menuItems": {
                "service_1": t('services.menuItems.service_1'),
                "service_2": t('services.menuItems.service_2'),
                "service_3": t('services.menuItems.service_3'),
                "service_4": t('services.menuItems.service_4'),
                "service_5": t('services.menuItems.service_5'),
                "service_6": t('services.menuItems.service_6'),
                "service_7": t('services.menuItems.service_7'),
                "service_8": t('services.menuItems.service_8'),
                "service_9": t('services.menuItems.service_9')
            }
        },
        "consult": {
            "label": t('consult.label')
        },
        "aboutUs": {
            "label": t('aboutUs.label'),
            "menuItems": {
                "whoAreWe": t('aboutUs.menuItems.whoAreWe'),
                "reviews": t('aboutUs.menuItems.reviews')
            }
        },
        "contacts": {
            "label": t('contacts.label')
        },
    }

    return (
        <header className={styles.root}>
            <nav className="min-h-[5rem] container flex justify-between items-center py-2">
                <Link href={'/'} className={styles.logo}>
                    <Image
                        src={`/images/logo-color.png`}
                        width={52}
                        height={52}
                        alt='Артур Сугако теперь и в Барселоне!'
                        priority
                    />
                </Link>

                <Group gap={rem('28px')} visibleFrom='lg' justify='center' className='text-base font-light gap-y-3'>
                    <HeaderMenu translatedNavbar={translatedNavbar} />
                </Group>

                <Group gap={'xl'} justify='center' visibleFrom='lg' className='gap-y-3'>
                    <LocaleSwitcher locale={currentLocale} />
                </Group>

                <HeaderDrawer currentLocale={currentLocale} translatedNavbar={translatedNavbar} />
            </nav>
        </header>
    )
}
