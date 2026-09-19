"use client"

import { Button, Divider, Group, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { IconArrowUpRight, IconClockHour4, IconMapPin } from "@tabler/icons-react"

const items: {
    title: string,
    text: string
}[] = [
        {
            title: `Graphic Designer`,
            text: `Create compelling visual identities and marketing assets that strengthen brands and inspire audiences.`,
        },
        {
            title: `Frontend Developer`,
            text: `Build fast, responsive, and pixel-perfect user interfaces using modern web technologies.`,
        },
        {
            title: `Backend Developer`,
            text: `Develop secure, scalable, and high-performance backend systems that power digital products.`,
        },
        {
            title: `UI/UX Designer`,
            text: `Design intuitive and engaging digital experiences that delight users across web and mobile platforms.`,
        },
        {
            title: `Digital Marketing Executive`,
            text: `Plan and execute data-driven digital campaigns that increase brand visibility and business growth.`,
        },
        {
            title: `AI & Automation Engineer`,
            text: `Build intelligent AI-driven solutions and automation systems that enhance business efficiency.`,
        },
        {
            title: `Business Development Executive`,
            text: `Build strong client relationships and identify new business opportunities to drive sustainable growth.`,
        },
        {
            title: `Digital Marketing Executive`,
            text: `Plan and execute data-driven digital campaigns that increase brand visibility and business growth.`,
        },
    ]

export default function CurrentOpenings() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3">
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>Current Openings</h2>
                        </div>
                    </Reveal>
                    {items.map((item, i) =>
                        <Reveal className="col-12" key={i}>
                            <Stack gap={15}>
                                <Group>
                                    <Stack gap={10} flex={1}>
                                        <Title order={2} fz="lg">
                                            {item.title}
                                        </Title>
                                        <Text fs="italic">{item.text}</Text>
                                        <Group gap={7.5}>
                                            <Button
                                                color="black"
                                                variant="outline"
                                                radius="xl"
                                                leftSection={<IconMapPin stroke={1} />}
                                                size="xs"
                                            >
                                                hybrid
                                            </Button>
                                            <Button
                                                color="black"
                                                variant="outline"
                                                radius="xl"
                                                leftSection={<IconClockHour4 stroke={1} />}
                                                size="xs"
                                            >
                                                Full-Time
                                            </Button>
                                        </Group>
                                    </Stack>
                                    <Button
                                        color="black"
                                        rightSection={<IconArrowUpRight stroke={1.5} />}
                                        component="a"
                                        href="mailto:hr@astack.co"
                                    >
                                        Apply
                                    </Button>
                                </Group>
                                <Divider size={2} />
                            </Stack>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
