"use client"

import css from "./Touch.module.css"

import { Divider, Grid, Group, Image, Paper, Text } from "@mantine/core"
import { motion } from "motion/react"
import MotionText from "../Common/MotionText"

const MotionDiv = motion.div

export default function Touch() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-12">
                        <div className={css.touch}>
                            <Grid gap={5}>
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Group p="xl" wrap="nowrap">
                                        <Divider
                                            orientation="vertical"
                                            color="rgb(255, 255, 255, .35)"
                                        />
                                        <Text maw="20rem" fz="xl" c="rgb(255, 255, 255, .35)">
                                            <MotionText
                                                text="Complex problems, evolving markets, and the need to grow."
                                                animation="slide-left"
                                            />
                                        </Text>
                                    </Group>

                                    <MotionDiv
                                        initial={{ opacity: 0, x: -60, scale: 0.96 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ amount: 0.25 }}
                                        transition={{
                                            duration: 3,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        animate={{
                                            y: [0, -6, 0, 5, 0],
                                            rotate: [0, 0.4, 0, -0.3, 0],
                                        }}
                                        style={{ width: "fit-content" }}
                                    >
                                        <Image
                                            src="/assets/images/hand-1.png"
                                            radius="1rem"
                                            w="auto"
                                        />
                                    </MotionDiv>
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <MotionDiv
                                        initial={{ opacity: 0, x: 60, scale: 0.96 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ amount: 0.25 }}
                                        transition={{
                                            duration: 3,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        animate={{
                                            y: [0, 5, 0, -6, 0],
                                            rotate: [0, -0.3, 0, 0.4, 0],
                                        }}
                                        style={{ width: "fit-content" }}
                                    >
                                        <Image
                                            src="/assets/images/hand-2.png"
                                            radius="1rem"
                                        />
                                    </MotionDiv>

                                    <Group p="xl" wrap="nowrap" justify="end">
                                        <Text maw="20rem" fz="xl" ta="end" c="rgb(255, 255, 255, .35)">
                                            <MotionText
                                                text="Strategy, creativity, and technology that drive real business impact."
                                                animation="slide-left"
                                            />
                                        </Text>
                                        <Divider
                                            orientation="vertical"
                                            color="rgb(255, 255, 255, .35)"
                                        />
                                    </Group>
                                </Grid.Col>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}