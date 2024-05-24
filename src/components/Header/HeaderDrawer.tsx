'use client'
import { Burger, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react'
import styles from './Header.module.scss';
import Image from 'next/image';
import HeaderNav from './HeaderNav';

export default function HeaderDrawer() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

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
