import React from 'react';
import { Menu, Group } from '@mantine/core';
import { LINKS } from '@/data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function HeaderMenu(): React.JSX.Element {
    const items = LINKS.map((link) => {
        const menuItems = link.links?.map((item) => {
            const innerMenuItems = item.links?.map((innerItem) => (
                <Menu.Item key={innerItem.label}>{innerItem.label}</Menu.Item>
            ));

            if (innerMenuItems) {
                return (
                    <Menu.Item key={item.label}>
                        <Menu key={item.label} trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow position="right-start" offset={20}>
                            <Menu.Target>
                                <Link
                                    href={item.link}
                                    onClick={(event) => event.preventDefault()}
                                >
                                    <Group gap={'xs'}>
                                        <span>{item.label}</span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </Group>
                                </Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                {innerMenuItems}
                            </Menu.Dropdown>
                        </Menu>
                    </Menu.Item>
                )
            }
            
            return (
                <Menu.Item key={item.label}>{item.label}</Menu.Item>
            );
        });

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow>
                    <Menu.Target>
                        <Link
                            href={link.link}
                            onClick={(event) => event.preventDefault()}
                            className='linkHover'
                        >
                            <Group gap={'xs'}>
                                <span>{link.label}</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </Group>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {menuItems}
                    </Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={link.label}
                href={link.link}
                onClick={(event) => event.preventDefault()}
                className='linkHover'
            >
                {link.label}
            </Link>
        );
    });

    return <>{items}</>;
}
