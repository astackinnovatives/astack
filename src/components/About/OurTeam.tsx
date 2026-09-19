"use client"

import { AspectRatio, Card, Image, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { motion } from "motion/react"
import { useMediaQuery } from "@mantine/hooks"

const items = [
    {
        image: `anas.png`,
        position: `CEO & Director Operations`,
        name: `Anas Abbas`,
    },
    {
        image: `anish-sr.png`,
        position: `Director  Strategy and  Finance`,
        name: `Anish SR`,
    },
    {
        image: `ajith.png`,
        position: `Director Marketing`,
        name: `Ajith Subrahamanyam`,
    },
    {
        image: `parvathi.png`,
        position: `President Customer Relations`,
        name: `Parvathi Ajith`,
    },
    {
        image: `jishnu.png`,
        position: `VP Web & Digital`,
        name: `Jishnu Gopi`,
    },
    {
        image: `rizan.jpg`,
        position: `VP Designs`,
        name: `Rizan VS`,
    },
]

export default function OurTeam() {
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 g-md-4">
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>Our Leadership</h2>
                            <p>
                                We believe the best work comes from teamwork. Our diverse team works closely to turn concepts into reality.
                            </p>
                        </div>
                    </Reveal>
                    {items.map((item, i) =>
                        <Reveal
                            key={item.name}
                            className="col-md-4"
                            delay={isMobile ? 0 : ((i % 3) + 1) * .1}
                        >
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ duration: .5 }}
                            >
                                <Card shadow="md" p={0}>
                                    <AspectRatio ratio={1}>
                                        <Image
                                            src={`/assets/images/team/${item.image}`}
                                            alt={item.name}
                                            radius="md"
                                            style={{ filter: `grayscale(1)`, objectPosition: `top` }}
                                        />
                                    </AspectRatio>
                                    <Stack gap={5} p="1rem">
                                        <Text c="color.8" fw={500}>
                                            {item.position}
                                        </Text>
                                        <Title order={2} fz="lg">
                                            {item.name}
                                        </Title>
                                    </Stack>
                                </Card>
                            </motion.div>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
