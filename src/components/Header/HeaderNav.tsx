import React from 'react';
import { NavLink } from '@mantine/core';
import { LINKS } from '@/data/index';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

export default function HeaderNav({ closeNav }: IHeaderProps): React.JSX.Element {
    const NavLinks = LINKS.map((link) => {
        const menuItems = link.links?.map((item, index) => {
            const innerItems = item.links?.map((innerItem) => {
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
                        label={item.label}
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
                    label={item.label}
                    key={Math.random()}
                    onClick={() => closeNav()}
                />
            )
        });

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
                href={link.link}
                className={styles.navLink}
                label={<span className={styles.navLinkLabel}>{link.label}</span>}
                key={Math.random()}
                onClick={() => closeNav()}
            />
        );
    });

    return <>{NavLinks}</>;
}
