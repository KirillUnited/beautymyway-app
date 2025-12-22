"use client";
import React from "react";
import { Menu, Group } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/i18n.config";

export default function HeaderMenu({
  translatedNavbar,
}: any): React.JSX.Element {
  console.log(translatedNavbar);
  const items = translatedNavbar.map((link: any) => {
    const menuItems = link.submenu?.[0]?.services?.map((item: any) => {
      return (
        <Menu.Item
          key={item.title}
          component={Link}
          href={`posts/${item.slug}`}
        >
          {item.title}
        </Menu.Item>
      );
    });

    if (menuItems) {
      return (
        <Menu
          key={link.title}
          trigger="hover"
          transitionProps={{ exitDuration: 150 }}
          withinPortal
          withArrow
        >
          <Menu.Target>
            <a className="linkHover">
              <Group gap={"xs"}>
                <span>{link.title}</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </Group>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.title} href={`/${link.slug}`} className="linkHover">
        {link.title}
      </Link>
    );
  });

  return <>{items}</>;
}
