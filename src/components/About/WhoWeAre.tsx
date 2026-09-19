"use client"

import { Button, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import Link from "next/link"



export default function WhoWeAre() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 align-items-end">
                    <Reveal className="col-12">
                        <div className="title">
                            <h2>Who We Are</h2>
                        </div>
                    </Reveal>
                    <Reveal className="col-md-6">
                        <Title
                            c="rgb(0 0 0 / .35)"
                            fz="calc(1.5rem + 3vw)"
                            fw={300}
                            lh={1.15}
                        >
                            More Than a Digital Agency.
                        </Title>
                    </Reveal>
                    <Reveal className="col-md-6 text-end">
                        <p>
                            Astack Innovatives is a digital transformation company helping businesses create stronger brands, better digital products, and scalable technology solutions. We believe great businesses are built through strategy, creativity, innovation, and meaningful human experiences.
                        </p>
                        <Button
                            color="black"
                            component={Link}
                            href="/solutions"
                        >
                            Our Solutions
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
