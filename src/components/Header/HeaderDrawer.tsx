'use client'
import { Burger, Drawer, Flex, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react'
import styles from './Header.module.scss';
import Image from 'next/image';
import HeaderNav from './HeaderNav';
import { locales } from '@/i18n.config';
import classNames from 'classnames';
import useLocaleSwitcher from '@/hooks/useLocaleSwitcher';

export default function HeaderDrawer({ currentLocale, translatedNavbar }: { currentLocale: any, translatedNavbar: any }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { changeLocale, getLocaleIcon } = useLocaleSwitcher();
    const handleLocaleChange = (localeName: string) => {
        changeLocale(localeName)
    }

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

                <Flex direction={'row'} gap={'md'} align="center" justify={'center'} key={235352535235}>
                    <Menu classNames={{ dropdown: classNames('inline-flex') }}>
                        {
                            locales.map((localeName) => {
                                const active = currentLocale === localeName ? true : null;

                                return (
                                    <Menu.Item
                                        key={localeName}
                                        className={classNames('w-auto uppercase font-light px-2 md:px-4 flex-wrap gap-y-2',
                                            styles.navLink,
                                            {
                                                'scale-150': active
                                            }
                                        )}
                                        onClick={() => handleLocaleChange(localeName)}
                                        leftSection={
                                            <Image
                                                src={getLocaleIcon(localeName)}
                                                width={20}
                                                height={20}
                                                className="rounded-full"
                                                alt={localeName} />
                                        }
                                    >
                                        <span className={classNames(
                                            {
                                                'font-bold': active
                                            }
                                        )}>{localeName}</span>
                                    </Menu.Item>
                                );
                            })}
                    </Menu>
                </Flex>
            </Drawer>
        </>
    )
}
