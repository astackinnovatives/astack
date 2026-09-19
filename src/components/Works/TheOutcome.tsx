"use client"

import { Card, Paper, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { Work } from "./Data"

type Props = {
    item: Work
}

export default function TheOutcome({ item }: Props) {
    return (
        <Paper py="xxl">
            <div className="container">
                <Paper
                    bg="linear-gradient(102.07deg, #03192A 35.43%, #FF005A 152.95%)"
                    p="xxl"
                    c="white"
                    radius="xl"
                >
                    <div className="row g-3 justify-content-center">
                        <Reveal className="col-12">
                            <div className="title center">
                                <Title order={2} c="white">The Outcome</Title>
                            </div>
                        </Reveal>
                        <Reveal className="col-md-10 text-center">
                            {item.outcome.map((item) =>
                                <p key={item}>{item}</p>
                            )}
                        </Reveal>
                    </div>
                </Paper>
            </div>
        </Paper>
    )
}
