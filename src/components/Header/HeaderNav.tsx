import React from 'react';
import { NavLink } from '@mantine/core';
import { LINKS } from '@/data/index';
import styles from './Header.module.scss';
import { IHeaderProps, IMenuItemsProps } from './Header.props';

export default function HeaderNav({ closeNav, translatedNavbar, currentLocale }: IHeaderProps): React.JSX.Element {    
    const NavLinks = LINKS.map((link) => {
        const menuItems = link.links?.map((item: IMenuItemsProps, index) => {
            const translatedMenuItem = translatedNavbar[link.name].menuItems[`${item.name}`];
            const innerItems = item.links?.map((innerItem: IMenuItemsProps) => {
                return (
                    <NavLink
                        href={innerItem.link}
                        className={styles.navLink}
                        label={innerItem.label}
                        key={innerItem.label}
                        onClick={() => closeNav()}
                    />
                )
            });

            if (innerItems) {
                return (
                    <NavLink
                        className={styles.navLink}
                        label={translatedMenuItem}
                        key={Math.random()}
                    >
                        {innerItems}
                    </NavLink>
                )
            }

            return (
                <NavLink
                    href={item.link}
                    className={styles.navLink}
                    label={translatedMenuItem}
                    key={Math.random()}
                    onClick={() => closeNav()}
                />
            )
        });

        if (menuItems) {
            return (
                <NavLink
                    label={<span className={styles.navLinkLabel}>{translatedNavbar[link.name].label}</span>}
                    className={styles.navLink}
                    key={Math.random()}
                >
                    {menuItems}
                </NavLink>
            );
        }

        return (
            <NavLink
                href={`/${currentLocale}${link.link}`}
                className={styles.navLink}
                label={<span className={styles.navLinkLabel}>{translatedNavbar[link.name].label}</span>}
                key={Math.random()}
                onClick={() => closeNav()}
            />
        );
    });

    return <>{NavLinks}</>;
}
