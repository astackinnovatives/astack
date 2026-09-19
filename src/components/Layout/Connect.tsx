import { IconBrandWhatsapp, IconMailOpened, IconPhone } from "@tabler/icons-react";
import { ActionIcon, Anchor, Box, Image, Stack } from "@mantine/core";
import React from "react";

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

            {/* <Anchor
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                pos="fixed"
                inset="auto auto .75rem .75rem"
                style={{ zIndex: 99 }}
            >
                <Image
                    src="/assets/images/wp.gif"
                    alt="WhatsApp"
                    h="4rem"
                />
            </Anchor> */}
        </section>
    );
}