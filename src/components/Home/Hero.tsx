"use client"

import { useRef } from "react"
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    cubicBezier,
} from "motion/react"

import {
    Box,
    Button,
    Group,
    Image,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core"

import Link from "next/link"

import Reveal from "../Layout/Reveal"
import MotionText from "../Common/MotionText"

const ease = cubicBezier(0.16, 1, 0.3, 1)

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 26,
        mass: 0.4,
        restDelta: 0.001,
    })

    const leftX = useTransform(smoothProgress, [0, 1], ["-20%", "-5%"], {
        ease,
    })

    const leftY = useTransform(smoothProgress, [0, 1], [0, -180], {
        ease,
    })

    const leftRotate = useTransform(smoothProgress, [0, 1], [40, 65], {
        ease,
    })

    const leftScale = useTransform(smoothProgress, [0, 1], [1, 1.3], {
        ease,
    })

    const leftOpacity = useTransform(
        smoothProgress,
        [0, 0.75, 1],
        [1, 0.7, 0]
    )

    const rightX = useTransform(smoothProgress, [0, 1], ["20%", "5%"], {
        ease,
    })

    const rightY = useTransform(smoothProgress, [0, 1], [0, -140], {
        ease,
    })

    const rightRotate = useTransform(smoothProgress, [0, 1], [-40, -65], {
        ease,
    })

    const rightScale = useTransform(smoothProgress, [0, 1], [1, 1.3], {
        ease,
    })

    const rightOpacity = useTransform(
        smoothProgress,
        [0, 0.75, 1],
        [1, 0.7, 0]
    )

    const imageBlur = useTransform(
        smoothProgress,
        [0, 0.7, 1],
        ["0px", "1px", "5px"]
    )

    const contentScale = useTransform(
        smoothProgress,
        [0, 0.75, 1],
        [1, 0.85, 0.6],
        { ease }
    )

    const contentY = useTransform(smoothProgress, [0, 1], [0, -180], {
        ease,
    })

    const contentOpacity = useTransform(
        smoothProgress,
        [0, 0.65, 1],
        [1, 0.8, 0]
    )

    return (
        <Reveal
            ref={heroRef}
            animation="fade-in"
            duration={1.5}
            style={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                pos="sticky"
                top={0}
                h="min(100vh, 50rem)"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    pos="absolute"
                    inset={0}
                    style={{
                        alignItems: "center",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0, 10, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "loop",
                        }}
                        style={{
                            willChange: "transform",
                        }}
                    >
                        <motion.div
                            style={{
                                x: leftX,
                                y: leftY,
                                rotate: leftRotate,
                                scale: leftScale,
                                opacity: leftOpacity,
                                filter: imageBlur,
                                transformOrigin: "center",
                                willChange:
                                    "transform, opacity, filter",
                            }}
                        >
                            <Image
                                src="/assets/images/hero-svg.png"
                                alt="Hero"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "loop",
                        }}
                        style={{
                            willChange: "transform",
                        }}
                    >
                        <motion.div
                            style={{
                                x: rightX,
                                y: rightY,
                                rotate: rightRotate,
                                scale: rightScale,
                                opacity: rightOpacity,
                                filter: imageBlur,
                                transformOrigin: "center",
                                willChange:
                                    "transform, opacity, filter",
                            }}
                        >
                            <Image
                                src="/assets/images/hero-svg.png"
                                alt="Hero"
                            />
                        </motion.div>
                    </motion.div>
                </SimpleGrid>

                <motion.div
                    style={{
                        width: "100%",
                        scale: contentScale,
                        y: contentY,
                        opacity: contentOpacity,
                        zIndex: 2,
                        willChange: "transform, opacity",
                    }}
                >
                    <div className="container">
                        <div className="row g-3 justify-content-center text-center">
                            <div className="col-md-10">
                                <Title order={2} fz="xl">
                                    <MotionText
                                        text="Transforming Businesses Through"
                                        animation="slide-up"
                                    />
                                </Title>

                                <Title
                                    order={1}
                                    fz="clamp(2.25rem, 7.5vw, 3rem)"
                                >
                                    <MotionText
                                        text="Branding, Technology & Innovation."
                                        animation="slide-left"
                                    />
                                </Title>
                            </div>

                            <Reveal className="col-md-8">
                                <Text fz="lg">
                                    We partner with ambitious businesses
                                    to build distinctive brands, create
                                    exceptional digital experiences, and
                                    develop technology solutions that
                                    accelerate sustainable growth.
                                </Text>
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
                </motion.div>
            </Box>
        </Reveal>
    )
}