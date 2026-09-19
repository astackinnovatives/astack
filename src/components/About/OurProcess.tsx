"use client"

import { Card, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { motion } from "motion/react"

const items = [
    {
        text: `Understand your vision`,
        title: `Discover`,
        col: `col-md-6`,
        rotate: -10,
    },
    {
        text: `Explore insights deeply`,
        title: `Research`,
        col: `col-md-6`,
        rotate: -10,
    },
    {
        text: `Shape ideas into strategy.`,
        title: `Strategy & Concept`,
        col: `col-md-12`,
        rotate: 10,
    },
    {
        text: `Craft intuitive experiences.`,
        title: `Design Phase`,
        col: `col-md-6`,
        rotate: -10,
    },
    {
        text: `Build scalable solutions.`,
        title: `Develop`,
        col: `col-md-6`,
        rotate: -10,
    },
    {
        text: `Deliver with confidence.`,
        title: `Launch`,
        col: `col-md-12`,
        rotate: 18,
    },
    {
        text: `Optimize and scale continuously.`,
        title: `Grow`,
        col: `col-md-12`,
        rotate: -10,
    },
]

export default function OurProcess() {
    return (
        <Paper radius={0} bg="color.0" py="xxl">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-md-6">
                        <div className="title center">
                            <h2>Our Process</h2>

                            <p>
                                Every successful project begins with a clear
                                strategy and follows a proven process that
                                transforms ideas into impactful digital
                                solutions.
                            </p>
                        </div>
                    </Reveal>

                    <div className="col-md-11">
                        <div className="row g-0 text-center">
                            {items.map((item, i) =>
                                <div key={item.title} className={item.col}>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 2,
                                            rotate: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: item.rotate,
                                        }}
                                        viewport={{ amount: 0.5 }}
                                        whileHover={{
                                            scale: 1.25,
                                            rotate: 0,
                                            zIndex: 10,
                                        }}
                                        transition={{ duration: .5 }}
                                        style={{
                                            display: `inline-block`,
                                            position: `relative`,
                                        }}
                                    >
                                        <Card
                                            bg="color.0"
                                            pos="relative"
                                            p="xl"
                                            ta="start"
                                            shadow="lg"
                                            style={{
                                                overflow: `visible`,
                                                border: `1px solid var(--dark)`,
                                            }}
                                        >
                                            <motion.div
                                                initial={{ x: 200 }}
                                                whileInView={{ x: 0 }}
                                                transition={{ duration: .5 }}
                                                style={{
                                                    position: `absolute`,
                                                    inset: `-.5rem -.5rem auto auto`,
                                                }}
                                            >
                                                <ThemeIcon
                                                    radius="xl"
                                                    color="color.6"
                                                >
                                                    <Text fz="xs" c="black">
                                                        {i + 1}
                                                    </Text>
                                                </ThemeIcon>
                                            </motion.div>

                                            <Stack gap={5} tt="uppercase">
                                                <Text c="color.8">
                                                    {item.text}
                                                </Text>
                                                <Title order={2} fz="xxl">
                                                    {item.title}
                                                </Title>
                                            </Stack>
                                        </Card>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}