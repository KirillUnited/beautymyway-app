import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Group, Menu } from '@mantine/core'
import React from 'react'
import Link from 'next/link'
import i18n, { locales } from '@/i18n'

export default function LanguageSwitcher() {
    return (
        <Menu trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow>
            <Menu.Target>

                <a
                    className='linkHover'
                >
                    <Group gap={'xs'}>
                        <span>RU</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Group>
                </a>
            </Menu.Target>
            <Menu.Dropdown>
                {
                    locales.map((localeName) => {
                        return (
                            <Menu.Item key={localeName}>
                                <Link href={localeName}>
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
