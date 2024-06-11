'use client'
import React from 'react';
import { Menu, Group } from '@mantine/core';
import { LINKS } from '@/data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@/i18n.config';
import { IMenuItemsProps } from './Header.props';


export default function HeaderMenu({ translatedNavbar }: any): React.JSX.Element {
    const items = LINKS.map((link) => {
        const menuItems = link.links?.map((item: IMenuItemsProps) => {
            const translatedMenuItem = translatedNavbar[link.name].menuItems[`${item.name}`];
            const innerMenuItems = item.links?.map((innerItem: IMenuItemsProps) => (
                <Menu.Item key={innerItem.label} component={Link} href={innerItem.link}>
                    {translatedMenuItem.innerMenuItems[`${innerItem.name}`]}
                </Menu.Item>
            ));

            if (innerMenuItems) {
                return (
                    <Menu.Item key={item.label}>
                        <Menu key={item.label} trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow position="right-start" offset={20}>
                            <Menu.Target>
                                <Group gap={'xs'}>
                                    <span>{translatedMenuItem.label}</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Group>
                            </Menu.Target>
                            <Menu.Dropdown>
                                {innerMenuItems}
                            </Menu.Dropdown>
                        </Menu>
                    </Menu.Item>
                )
            }

            return (
                <Menu.Item key={item.label} component={Link} href={item.link}>{translatedMenuItem.label}</Menu.Item>
            );
        });

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow>
                    <Menu.Target>
                        <a
                            className='linkHover'
                        >
                            <Group gap={'xs'}>
                                <span>{translatedNavbar[link.name].label}</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </Group>
                        </a>
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
                className='linkHover'
            >
                {translatedNavbar[link.name].label}
            </Link>
        );
    });

    return <>{items}</>;
}
