"use client"
import { Button, Group } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import Link from "next/link"
import { works } from "../Works/Data"
import ProjectCard from "../Works/ProjectCard"

export default function OurWorks() {
    return (
        <section className='sec-block'>
            <div className="container">
                <div className="row g-3 g-md-4 justify-content-center">
                    <Reveal className="col-md-8">
                        <div className="title center">
                            <h2>Our Works</h2>
                            <p>
                                From startups to global enterprises, we craft brands, digital experiences, and technology solutions that solve real business challenges and create measurable results.
                            </p>
                        </div>
                    </Reveal>
                    {works.slice(0, 4).map((item, i) =>
                        <Reveal className="col-md-5" key={i} animation="zoom-in">
                            <ProjectCard item={item} />
                        </Reveal>
                    )}
                    <Reveal className="col-12">
                        <Group justify="center" gap="0.5rem">
                            <Button
                                component="a"
                                href="tel:+919037090652"
                                color="black"
                            >
                                Let's Talk
                            </Button>
                            <Button
                                component={Link}
                                color="black"
                                href="/about"
                                variant="outline"
                            >
                                View More Works
                            </Button>
                        </Group>
                    </Reveal>
                </div>
            </div>
        </section >
    )
}
