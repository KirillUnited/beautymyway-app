'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    Group,
    Flex,
    Burger,
    Drawer,
    rem,
} from '@mantine/core';
import HeaderMenu from './HeaderMenu';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';
import { useDisclosure } from '@mantine/hooks';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface Props {
    currentLocale: string
}

export default function Header({currentLocale}: Props) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <>
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

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="lg" color='var(--mantine-color-primary-0)' />
                </nav>
            </header>

            <Drawer
                style={{
                    '--mantine-color-body': '#2B3632',
                    '--mantine-color-gray-7': '#fff',
                }}
                opened={drawerOpened}
                onClose={closeDrawer}
                size="75%"
                padding="md"
                hiddenFrom="lg"
                title={
                    <Link href={'/'} className={styles.logo}>
                        <Image
                            src={`/images/logo-color.png`}
                            width={52}
                            height={52}
                            alt='Артур Сугако теперь и в Барселоне!'
                            priority
                        />
                    </Link>
                }
                zIndex={1000000}
            >
                <Flex direction={'column'} mx={'-md'} mb={'md'} key={235235}>
                    <HeaderNav closeNav={closeDrawer} />
                </Flex>

                <Flex direction={'column'} gap={'md'} align="center" key={235352535235}>
                    <div className="flex items-center justify-center font-light">
                        <button className={`px-2`}>Ua</button>
                        <button className={`px-2`}>Es</button>
                    </div>
                </Flex>
            </Drawer>
        </>
    )
}
