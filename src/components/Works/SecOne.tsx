"use client"

import { Paper } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { Work } from "./Data"

type Props = {
    item: Work
}

export default function SecOne({ item }: Props) {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 g-md-4">
                    <div className="col-1 col-md-auto">
                        <Paper
                            bg="linear-gradient(180deg, #FF005A 13.63%, #D9EDFB 33.25%)"
                            h="100%"
                            w="10"
                        />
                    </div>
                    <div className="col-11 col-md">
                        <div className="row g-3 g-md-5">
                            <Reveal className="col-md-10" animation="fade-right">
                                <div className="title mb-2">
                                    <h2>The Challenge</h2>
                                </div>
                                {item.secOne.challenge.map((text) =>
                                    <p key={text}>{text}</p>
                                )}
                            </Reveal>
                            <Reveal className="col-md-10 offset-md-2" animation="fade-left">
                                <div className="title mb-2">
                                    <h2>The Solution</h2>
                                </div>
                                {item.secOne.solution.map((text) =>
                                    <p key={text}>{text}</p>
                                )}
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
