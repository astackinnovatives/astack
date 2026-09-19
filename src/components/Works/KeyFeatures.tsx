"use client"

import { Button } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { Work } from "./Data"

type Props = {
    item: Work
}

export default function KeyFeatures({ item }: Props) {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 g-md-4">
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>Key Features</h2>
                        </div>
                    </Reveal>
                    {item.features.map((item) =>
                        <Reveal className="col-md-4" key={item}>
                            <Button
                                variant="outline"
                                radius="xl"
                                size="md"
                                fullWidth
                                fw={600}
                                color="black"
                            >
                                {item}
                            </Button>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
