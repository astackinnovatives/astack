"use client"

import { Button, Center, Group, Image, Text, Title } from "@mantine/core";
import Reveal from "../Layout/Reveal";
import { motion } from "motion/react";
import MotionText from "./MotionText";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
    image?: string;
    top?: string;
    title?: string;
    text?: string;
}

export default function Hero({
    image,
    top,
    title,
    text,
}: props) {

    const pathname = usePathname();

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
                    src={image}
                    alt={title}
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
                            <Title order={2} fz="xl">
                                <MotionText
                                    text={top}
                                    animation="slide-up"
                                />
                            </Title>

                            <Title
                                order={1}
                                fz="clamp(2.25rem, 7.5vw, 3rem)"
                            >
                                <MotionText
                                    text={title}
                                    animation="slide-left"
                                />
                            </Title>
                        </div>
                        <Reveal className="col-md-8">
                            <Text fz="lg">{text}</Text>
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
                                    href={pathname === '/works/' ? '/contact' : '/works'}
                                    color="black"
                                    variant="outline"
                                >
                                    {pathname === '/works/' ? 'contact us' : 'View our work'}
                                </Button>
                            </Group>
                        </Reveal>
                    </div>
                </div>
            </Center>
        </Reveal>
    );
}