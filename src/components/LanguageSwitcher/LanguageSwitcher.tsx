import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Group, Menu } from '@mantine/core'
import React from 'react'

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
                <Menu.Item>
                    EN
                </Menu.Item>
                <Menu.Item>
                    ES
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
