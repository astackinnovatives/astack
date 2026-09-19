"use client"

import { Divider, Text, ThemeIcon, Title } from "@mantine/core"
import { IconEyeCog, IconTargetArrow } from "@tabler/icons-react"
import Reveal from "../Layout/Reveal"

export default function VM() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 g-md-4">
                    <Reveal className="col-md-7" animation="fade-left">
                        <Divider
                            color="color"
                            size={1}
                            label={
                                <ThemeIcon size="3rem" radius="xl">
                                    <IconEyeCog stroke={1} size="2rem" />
                                </ThemeIcon>
                            }
                            labelPosition="right"
                        />
                    </Reveal>
                    <Reveal className="col-md-5" animation="fade-right">
                        <Title fz="xxl" mb={10}>
                            Our Vision
                        </Title>
                        <Text>
                            Designing intuitive digital experiences that connect users with your To become a globally trusted digital transformation partner creating brands, technology, and experiences that inspire meaningful business growth.business
                        </Text>
                    </Reveal>
                    <Reveal className="col-md-7 order-md-1" animation="fade-right">
                        <Divider
                            color="color.4"
                            size={1}
                            label={
                                <ThemeIcon size="3rem" radius="xl" color="color.4">
                                    <IconTargetArrow stroke={1} size="2rem" />
                                </ThemeIcon>
                            }
                            labelPosition="left"
                        />
                    </Reveal>
                    <Reveal className="col-md-5 text-end" animation="fade-left">
                        <Title fz="xxl" mb={10}>
                            Our Mission
                        </Title>
                        <Text>
                            Empower businesses through creativity, innovation, and technology by delivering strategic solutions that create measurable impact.
                        </Text>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
