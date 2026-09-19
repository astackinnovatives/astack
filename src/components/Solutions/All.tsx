"use client"

import { Box, Button, Group, Image, Text } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { solutions } from "./Data"
import Link from "next/link"
import { motion } from "motion/react"

export default function All() {
    return (
        <>
            {solutions.map((item, i) =>
                <Box py="xxl" key={i} bg={i % 2 === 0 ? 'color.0' : 'none'}>
                    <div className="container">
                        <div className="row g-3 g-md-4">
                            <Reveal className="col-12">
                                <div className="title center">
                                    <h2>{item.title}</h2>
                                </div>
                            </Reveal>
                            <Reveal className="col-12">
                                <Text ta="center">{item.text}</Text>
                            </Reveal>
                            <Reveal className="col-12" animation="zoom-in">
                                <Image
                                    src={`/assets/images/solutions/${item.image}`}
                                    alt={item.title}
                                    radius="xl"
                                />
                            </Reveal>
                            <Reveal className="col-12">
                                <Group justify="center">
                                    {item.chip.map((list) =>
                                        <motion.div
                                            key={list}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Button
                                                variant="outline"
                                                color="color.8"
                                                radius="xl"
                                            >
                                                {list}
                                            </Button>
                                        </motion.div>
                                    )}
                                </Group>
                            </Reveal>
                            <Reveal className="col-12">
                                <Group
                                    justify="center"
                                    gap="0.5rem"
                                >
                                    <Button
                                        component="a"
                                        href="tel:+919037090652"
                                        color="black"
                                    >
                                        Let's Talk
                                    </Button>

                                    <Button
                                        component={Link}
                                        href="/about"
                                        color="black"
                                        variant="outline"
                                    >
                                        View our work
                                    </Button>
                                </Group>
                            </Reveal>
                        </div>
                    </div>
                </Box>
            )}
        </>
    )
}
