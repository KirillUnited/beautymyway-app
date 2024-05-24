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

interface Props {
    currentLocale: string
}

export default function Header({ currentLocale }: Props) {
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
                    <HeaderMenu />
                </Group>

                <Group gap={'xl'} justify='center' visibleFrom='lg' className='gap-y-3'>
                    <LanguageSwitcher currentLocale={currentLocale} />
                </Group>

                <HeaderDrawer />
            </nav>
        </header>
    )
}
