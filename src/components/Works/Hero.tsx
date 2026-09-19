"use client"

import { Button, Center, Divider, Group, Image, Text, Title } from "@mantine/core";
import Reveal from "../Layout/Reveal";
import { motion } from "motion/react";
import MotionText from "../Common/MotionText";
import { Work } from "./Data";
import { IconTrendingUp } from "@tabler/icons-react";

type props = {
    item: Work
}

export default function Hero({ item }: props) {

    return (
        <Reveal
            animation="fade-in"
            duration={1.5}
            style={{ position: `relative`, overflow: `hidden` }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/assets/images/works-cover.png"
                    alt={item.hero.title}
                    h="min(100vh, 50rem)"
                />
            </motion.div>
            <Center
                pos="absolute"
                inset={0}
                bg="rgb(255 255 255 / .75)"
                py="xxl"
            >
                <div className="container">
                    <div className="row g-3 justify-content-center text-center">
                        <div className="col-md-10">
                            <Title
                                order={1}
                                fz="clamp(2.25rem, 7.5vw, 3rem)"
                            >
                                <MotionText
                                    text={item.hero.title}
                                    animation="slide-left"
                                />
                            </Title>
                        </div>
                        <Reveal className="col-12">
                            <Button
                                variant="outline"
                                radius="xl"
                            >
                                {item.hero.cat}
                            </Button>
                        </Reveal>
                        <Reveal className="col-md-8">
                            <Text fz="lg">{item.hero.text}</Text>
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
                                    component="a"
                                    href={item.hero.link}
                                    target="_blank"
                                    color="black"
                                    variant="outline"
                                    rightSection={<IconTrendingUp stroke={1} />}
                                >
                                    Explore {item.hero.title}
                                </Button>
                            </Group>
                        </Reveal>
                    </div>
                </div>
            </Center>
        </Reveal>
    );
}