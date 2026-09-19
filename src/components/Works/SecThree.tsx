"use client"

import { Button, Card, Group, Paper, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { Work } from "./Data"
import { IconTrendingUp } from "@tabler/icons-react"

type Props = {
    item: Work
}

export default function SecThree({ item }: Props) {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    {item.secThree.map((item) =>
                        <Reveal className="col-md-6" key={item.title}>
                            <Paper
                                shadow="xl"
                                p="xl"
                                style={{ border: `1px solid rgb(0 0 0 / .25)` }}
                                h="100%"
                            >
                                <Stack gap={7.5}>
                                    <Title order={2} fz="">{item.title}</Title>
                                    <p>{item.text[0]}</p>
                                    <Text fw={600}>{item.text[1]}</Text>
                                    <Group>
                                        {item.chip.map((text) =>
                                            <Button
                                                key={text}
                                                bg="color.0"
                                                radius="xl"
                                                c="color.8"
                                                leftSection={<IconTrendingUp stroke={1.5} />}
                                            >
                                                {text}
                                            </Button>
                                        )}
                                    </Group>
                                    <p>{item.textEnd}</p>
                                </Stack>
                            </Paper>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
