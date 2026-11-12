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
            {/* <Box
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
            </Box> */}



            <Stack
                pos="fixed"
                bottom="1rem"
                left="1rem"
                gap="xs"
                style={{ zIndex: 99 }}
                visibleFrom="md"
            >
                <Anchor
                    href="tel:+64274076999"
                    style={{
                        textDecoration: "none",
                        borderRadius: "50px",
                        overflow: "hidden",
                        boxShadow: "0 6px 24px rgba(0, 35, 75, 0.25)",
                    }}
                    bg="#004281"
                >
                    <Group p="xs" wrap="nowrap" gap="sm" align="center">
                        <Image
                            src="/assets/images/icons/new-zealand.png"
                            alt="New Zealand"
                            w="32px"
                            h="32px"
                            radius="50%"
                            fit="cover"
                        />

                        <Stack gap={0}>
                            <Text c="white" size="xs" fw={500}>
                                Call us - New Zealand
                            </Text>
                            <Text c="white" size="sm" fw={700}>
                                +64 2740 76999
                            </Text>
                        </Stack>

                        <ActionIcon
                            variant="white"
                            color="blue"
                            radius="xl"
                            size="2.25rem"
                            aria-label="Call New Zealand"
                            style={{ pointerEvents: "none" }}
                        >
                            <IconPhone size="1.2rem" stroke={2} />
                        </ActionIcon>
                    </Group>
                </Anchor>

                <Anchor
                    href="tel:+919895251333"
                    style={{
                        textDecoration: "none",
                        borderRadius: "50px",
                        overflow: "hidden",
                        boxShadow: "0 6px 24px rgba(0, 35, 75, 0.25)",
                    }}
                    bg="#138808"
                >
                    <Group p="xs" wrap="nowrap" gap="sm" align="center">
                        <Image
                            src="/assets/images/icons/indian-flag.png"
                            alt="India"
                            w="32px"
                            h="32px"
                            radius="50%"
                            fit="cover"
                        />

                        <Stack gap={0} flex={1}>
                            <Text c="white" size="xs" fw={500}>
                                Call us - India
                            </Text>
                            <Text c="white" size="sm" fw={700}>
                                +91 98952 51333
                            </Text>
                        </Stack>

                        <ActionIcon
                            variant="white"
                            color="green"
                            radius="xl"
                            size="2.25rem"
                            aria-label="Call India"
                            style={{ pointerEvents: "none" }}
                        >
                            <IconPhone size="1.2rem" stroke={2} />
                        </ActionIcon>
                    </Group>
                </Anchor>
            </Stack>


        </section>
    );
}