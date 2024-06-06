'use client'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Group, Menu } from '@mantine/core'
import React from 'react'
import Link from 'next/link'
import { locales } from '@/i18n.config'

interface Props {
    currentLocale: string
}

export default function LanguageSwitcher({ currentLocale }: Props) {
    return (
        <Menu trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow>
            <Menu.Target>
                <a
                    className='linkHover uppercase'
                >
                    <Group gap={'xs'}>
                        <span>{currentLocale}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Group>
                </a>
            </Menu.Target>
            <Menu.Dropdown>
                {
                    locales.map((localeName) => {
                        return (
                            <Menu.Item key={localeName} className='uppercase px-0'>
                                <Link href={localeName} className='px-4'>
                                    {localeName}
                                </Link>
                            </Menu.Item>
                        );
                    })
                }
            </Menu.Dropdown>
        </Menu>
    )
}
