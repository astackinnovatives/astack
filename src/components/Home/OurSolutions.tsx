"use client"

import Link from "next/link"
import Reveal from "../Layout/Reveal"
import { Box, Button, Card, Group, Image, Stack, ThemeIcon, Title } from "@mantine/core"
import Blob from "./Blob"
import { IconArrowRight } from "@tabler/icons-react"
import { motion } from "motion/react"

type Item = {
    href: string
    title: string
    text: string
}

const items: Item[] = [
    {
        href: `/solutions`,
        title: `Branding & Creative`,
        text: `Building memorable brands through strategy, identity, storytelling, and creative experiences.`,
    },
    {
        href: `/solutions`,
        title: `Experience Design`,
        text: `Designing intuitive digital experiences that connect users with your business`,
    },
    {
        href: `/solutions`,
        title: `Technology`,
        text: `Building scalable digital platforms powered by modern technologies and intelligent solutions.`,
    },
    {
        href: `/solutions`,
        title: `Digital Marketing`,
        text: `Accelerating business growth through data-driven digital marketing and performance strategies.`,
    },
]

export default function OurSolutions() {
    return (
        <Box pos="relative" bg="color.0" py="xxl">
            <Image
                src="/assets/images/backgroud-svg.png"
                pos="absolute"
                inset={0}
                style={{ opacity: .25 }}
            />
            <div className="container">
                <div className="row g-3 g-md-4 justify-content-center">
                    <Reveal className="col-md-8">
                        <div className="title center">
                            <h2>Our Solutions</h2>
                            <p>
                                From strategy and branding to technology, design, and digital marketing, we deliver integrated solutions that help businesses build, grow, and lead with confidence.
                            </p>
                        </div>
                    </Reveal>
                    {items.map((item, i) =>
                        <Reveal className="col-md-5" key={i}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: .25 }}
                            >
                                <Card
                                    p={0}
                                    withBorder
                                    shadow="xl"
                                    radius="lg"
                                    component={Link}
                                    href={item.href}
                                >
                                    <Blob />
                                    <Stack p="lg" gap={7.5}>
                                        <Group justify="space-between">
                                            <Title order={3} fz="lg">
                                                {item.title}
                                            </Title>
                                            <ThemeIcon
                                                size="2.25rem"
                                                variant="outline"
                                                radius="xl"
                                                color="color.4"
                                            >
                                                <IconArrowRight stroke={1.25} />
                                            </ThemeIcon>
                                        </Group>
                                        {item.text}
                                    </Stack>
                                </Card>
                            </motion.div>
                        </Reveal>
                    )}
                    <Reveal className="col-12">
                        <Group justify="center" gap="0.5rem">
                            <Button
                                component="a"
                                href="tel:+919037090652"
                                color="black"
                            >
                                Let's Talk
                            </Button>
                            <Button
                                component={Link}
                                color="black"
                                href="/about"
                                variant="outline"
                            >
                                Know More
                            </Button>
                        </Group>
                    </Reveal>
                </div>
            </div>
        </Box>
    )
}