"use client"

import { IconBrandWhatsapp, IconMailOpened, IconPhone } from "@tabler/icons-react";
import { ActionIcon, Anchor, Box, Group, Image, Stack, Text } from "@mantine/core";

type Item = {
    href: string
    icon: React.ReactNode
    color: string
}

const items: Item[] = [
    {
        href: `tel:`,
        icon: <IconPhone stroke={1.5} />,
        color: `color`,
    },
    {
        href: `mailto:`,
        icon: <IconMailOpened stroke={1.5} />,
        color: `color`,
    },
    {
        href: `https://wa.me/`,
        icon: <IconBrandWhatsapp stroke={1.5} />,
        color: `#25D366;`,
    },
]

export default function Connect() {
    return (
        <section>
            <Box
                pos="fixed"
                inset="50% 0 auto auto"
                style={{
                    zIndex: 99,
                    translate: `0 -50%`
                }}
            >
                <Stack gap={2.5}>
                    {items.map((item) =>
                        <ActionIcon
                            key={item.href}
                            variant="filled"
                            color={item.color}
                            h="2.5rem"
                            w="2.5rem"
                            radius="xl"
                            component="a"
                            href={item.href}
                        >
                            {item.icon}
                        </ActionIcon>
                    )}
                </Stack>
            </Box>


            <Anchor
                href="tel:+64274076999"
                pos="fixed"
                bottom="1rem"
                left="1rem"
                style={{
                    zIndex: 99,
                    textDecoration: "none",
                    borderRadius: "50px",
                    overflow: "hidden",
                    boxShadow: "0 6px 24px rgba(0, 35, 75, 0.25)",
                    transition: "all 200ms ease",
                }}
                bg="#004281"
            >
                <Group
                    p="xs"
                    px="xs"
                    wrap="nowrap"
                    gap="sm"
                    align="center"
                >
                    <Image
                        src="/assets/images/icons/new-zealand.png"
                        alt="New Zealand"
                        w="32px"
                        h="32px"
                        radius="50%"
                        fit="cover"
                    />

                    <Stack gap={0}>
                        <Text
                            c="white"
                            size="xs"
                            fw={500}
                            lh={1.2}
                        >
                            Call us now
                        </Text>

                        <Text
                            c="white"
                            size="sm"
                            fw={700}
                            lh={1.4}
                            style={{ letterSpacing: "0.3px" }}
                        >
                            027 407 6999
                        </Text>
                    </Stack>

                    <ActionIcon
                        variant="white"
                        color="blue"
                        radius="xl"
                        size="2.25rem"
                        aria-label="Call us"
                        style={{ pointerEvents: "none" }}
                    >
                        <IconPhone size="1.2rem" stroke={2} />
                    </ActionIcon>
                </Group>
            </Anchor>

        </section>
    );
}