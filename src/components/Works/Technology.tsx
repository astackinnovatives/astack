"use client"

import { Card, Stack, Text } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { Work } from "./Data"

type Props = {
    item: Work
}

export default function Technology({ item }: Props) {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>Technology Stack</h2>
                        </div>
                    </Reveal>
                    {item.technology.map((item) =>
                        <Reveal className="col-md-4" key={item[0]}>
                            <Card withBorder bg="color.0">
                                <Stack gap={5} align="center">
                                    <i
                                        className={item[1]}
                                        style={{ fontSize: `5rem` }}
                                    />
                                    <Text>{item[0]}</Text>
                                </Stack>
                            </Card>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
