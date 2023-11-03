import React from 'react';
import { NavLink } from '@mantine/core';
import { LINKS } from '@/data/index';
import styles from './Header.module.scss';


export default function HeaderNav(): React.JSX.Element {
    const NavLinks = LINKS.map((link) => {
        const menuItems = link.links?.map((item, index) => (
            <NavLink
                className={styles.navLink}
                label={item.label}
                key={Math.random()}
            />
        ));

        if (menuItems) {
            return (
                <NavLink
                    label={<span className={styles.navLinkLabel}>{link.label}</span>}
                    className={styles.navLink}
                    key={Math.random()}
                >
                    {menuItems}
                </NavLink>
            );
        }

        return (
            <NavLink
                className={styles.navLink}
                label={<span className={styles.navLinkLabel}>{link.label}</span>}
                key={Math.random()}
            />
        );
    });

    return <>{NavLinks}</>;
}
