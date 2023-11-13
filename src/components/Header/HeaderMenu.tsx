import React from 'react';
import { Menu, Group } from '@mantine/core';
import { LINKS } from '@/data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function HeaderMenu(): React.JSX.Element {
    const items = LINKS.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.label}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            onClick={(event) => event.preventDefault()}
                            className='linkHover'
                        >
                            <Group gap={'xs'}>
                                <span>{link.label}</span>
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
            <a
                key={link.label}
                href={link.link}
                onClick={(event) => event.preventDefault()}
                className='linkHover'
            >
                {link.label}
            </a>
        );
    });

    return <>{items}</>;
}
