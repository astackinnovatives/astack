"use client"

import { Anchor, Card, Stack, ThemeIcon } from "@mantine/core";
import Reveal from "../Layout/Reveal";
import { IconLocation, IconMailOpened, IconPhone } from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react";

type Item = {
    icon: React.ReactNode
    links: [string, string][]
    col: string
}

const items: Item[] = [
    {
        icon: <IconPhone stroke={1.5} color="var(--mantine-color-color-3)" />,
        links: [
            [`tel:+919895251333`, `+91 98952 51333`],
            [`tel:+919037090652`, `+91 90370 90652`],
            [`tel:+64274076999`, `+64 27 407 6999 (NZ)`],
        ],
        col: `col-md-6`
    },
    {
        icon: <IconMailOpened stroke={1.5} color="var(--mantine-color-color-3)" />,
        links: [
            [`mailto:info@astack.co`, `info@astack.co`],
            [`mailto:bd@astack.co.nz`, `bd@astack.co.nz`],
        ],
        col: `col-md-6`
    },
    {
        icon: <IconLocation stroke={1.5} color="var(--mantine-color-color-3)" />,
        links: [
            [`#`, `3rd Floor Geo Infopark Kinfra Industrial ComplexKakkanad, INDIA`],
            [`#`, `229 Bealey Avenue, Christchurch Central, Christchurch 8013 New Zealand`],
        ],
        col: `col-md-12`
    },
]

export default function Links() {
    return (
        <div className="row g-3">
            {items.map((item, i) =>
                <Reveal className={item.col} key={i}>
                    <Card
                        withBorder
                        bg="color.0"
                        shadow="0"
                    >
                        <Stack gap={5}>
                            <ThemeIcon
                                size="3rem"
                                bg="white"
                                radius="xl"
                            >
                                {item.icon}
                            </ThemeIcon>
                            {item.links.map((link) =>
                                <Anchor
                                    key={link[1]}
                                    href={link[0]}
                                    c="color.9"
                                    component={motion.a}
                                    whileHover={{ x: 1, opacity: .75 }}
                                    transition={{ duration: .2 }}
                                >
                                    {link[1]}
                                </Anchor>
                            )}
                        </Stack>
                    </Card>
                </Reveal>
            )}
        </div>
    )
}
