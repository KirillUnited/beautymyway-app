'use client'
import { Burger, Drawer, Flex, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react'
import styles from './Header.module.scss';
import Image from 'next/image';
import HeaderNav from './HeaderNav';
import Socials from '@/components/Socials/Socials';
import { CONTACTS } from '@/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function HeaderDrawer({ currentLocale, translatedNavbar }: { currentLocale: any, translatedNavbar: any }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const socialItems = {
        'instagram': `${CONTACTS.socials.instagram[0]}`,
        'telegram': `${CONTACTS.socials.telegram[0]}`,
        'whatsapp': `${CONTACTS.socials.whatsapp[0]}`,
    };

    return (
        <>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="lg" color='var(--mantine-color-primary-0)' />
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
                    <HeaderNav closeNav={closeDrawer} translatedNavbar={translatedNavbar} currentLocale={currentLocale} />
                </Flex>
                <div className='flex flex-col items-center gap-4'>
                    <Socials items={socialItems} />
                    <Link href={`tel:${CONTACTS.tel[0]}`} className={`flex items-center gap-3 lg:gap-4`}>
                        <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                        <span>{CONTACTS.tel[0]}</span>
                    </Link>
                </div>
            </Drawer>
        </>
    )
}
