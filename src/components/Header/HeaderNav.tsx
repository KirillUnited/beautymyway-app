import React from 'react';
import { NavLink } from '@mantine/core';
import styles from './Header.module.scss';

export default function HeaderNav({ closeNav, translatedNavbar, currentLocale }: any): React.JSX.Element {    
    const NavLinks = translatedNavbar.map((link: any) => {
        const menuItems = link.submenu?.[0]?.services?.map((item: any,) => {
            return (
                <NavLink
                    href={`/${currentLocale}/${link.slug}/${item.slug}`}
                    className={styles.navLink}
                    label={item.title}
                    key={Math.random()}
                    onClick={() => closeNav()}
                />
            )
        });

        if (menuItems) {
            return (
                <NavLink
                    label={<span className={styles.navLinkLabel}>{link.title}</span>}
                    className={styles.navLink}
                    key={Math.random()}
                >
                    {menuItems}
                </NavLink>
            );
        }

        return (
            <NavLink
                href={`/${currentLocale}/${link.slug}`}
                className={styles.navLink}
                label={<span className={styles.navLinkLabel}>{link.title}</span>}
                key={Math.random()}
                onClick={() => closeNav()}
            />
        );
    });

    return <>{NavLinks}</>;
}
