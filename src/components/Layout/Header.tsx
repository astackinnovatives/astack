"use client";

import css from "./Header.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useDisclosure } from "@mantine/hooks";
import {
    Burger,
    Button,
    Drawer,
    Group,
    Menu,
    NavLink,
    Scroller,
    Stack,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IconChevronDown, IconPhone } from "@tabler/icons-react";
import MotionLink from "../Common/MotionLink";

type NavLink = {
    href?: string,
    label: string,
    children?: { href: string, label: string }[];
};

const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: "/about", label: "About" },
    { href: '/solutions', label: 'Solutions' },
    { href: '/works', label: 'Works' },
    { href: '/careers', label: 'Careers' },
    // {
    //     label: 'our projects',
    //     href: "/projects",
    //     children: [
    //         { href: '/projects', label: 'projects' },
    //     ]
    // },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isScroll, setIsScroll] = useState(false);
    const [opened, { toggle, close }] = useDisclosure(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScroll(window.scrollY > 1);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav
            className={clsx(css.nav, {
                [css.scroll]: isScroll,
            })}
        >
            <div className="container">
                <Group gap="xxl" justify="space-between" wrap="nowrap">
                    <Link href="/" className={css.navLogo}>
                        <img
                            src="/assets/images/logo.png"
                            alt="logo"
                        />
                    </Link>
                    <Scroller>
                        <Group gap="lg" visibleFrom="md" wrap="nowrap">
                            {navLinks.map((item) =>
                                item.children ? (
                                    <Menu key={item.label} shadow="md" width={220} trigger="hover">
                                        <Menu.Target>
                                            <span
                                                className={clsx(css.navLink, {
                                                    [css.active]: isActive(item.href!)
                                                })}
                                            >
                                                <MotionLink text={item.label} />
                                                <IconChevronDown stroke={1} />
                                            </span>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            {item.children.map((child) => (
                                                <Menu.Item key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        className={css.dropLink}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </Menu.Item>
                                            ))}
                                        </Menu.Dropdown>
                                    </Menu>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href!}
                                        className={clsx(css.navLink, {
                                            [css.active]: isActive(item.href!)
                                        })}
                                    >
                                        <MotionLink text={item.label} />
                                    </Link>
                                )
                            )}
                            <Button
                                variant="gradient"
                                gradient={{ from: 'black', to: 'color', deg: 90 }}
                                component="a"
                                href="tel:+919037090652"
                            >
                                Let's Talk
                            </Button>
                        </Group>
                    </Scroller>

                    <Burger
                        hiddenFrom="md"
                        opened={opened}
                        onClick={toggle}
                        color="color"
                    />
                </Group>

                <Drawer
                    opened={opened}
                    onClose={close}
                    size="80%"
                    withCloseButton={false}
                    hiddenFrom="md"
                >
                    <Stack gap="sm">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.label}
                                className={css.mLink}
                                component={item.children ? undefined : Link}
                                href={item.href!}
                                label={item.label}
                                active={isActive(item.href!)}
                                defaultOpened={isActive(item.href!)}
                                onClick={item.children ? undefined : close}
                            >
                                {item.children?.map((child) => (
                                    <NavLink
                                        key={child.href}
                                        className={css.mLink}
                                        component={Link}
                                        href={child.href}
                                        label={child.label}
                                        onClick={close}
                                    />
                                ))}
                            </NavLink>
                        ))}
                    </Stack>
                </Drawer>
            </div>
        </nav>
    );
}