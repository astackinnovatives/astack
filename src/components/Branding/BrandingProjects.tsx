"use client"

import { Box, Text } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import BrandCard from "./BrandCard"
import { brandProjects } from "./projects"

export default function BrandingProjects() {
    return (
        <Box py="xxl" bg="color.0">
            <div className="container">
                <div className="row g-3 g-md-4 justify-content-center">
                    <Reveal className="col-md-8">
                        <div className="title center">
                            <h2>Branding Projects</h2>
                            <Text>
                                Each project opens into the full story: the idea behind the brand, how the logo is built, the colours and type, and every piece it comes to life on.
                            </Text>
                        </div>
                    </Reveal>
                    <div className="w-100" />
                    {brandProjects.map((item, i) =>
                        <Reveal className="col-md-6 col-xl-5" key={item.slug} animation="zoom-in" delay={i * .08}>
                            <BrandCard item={item} />
                        </Reveal>
                    )}
                </div>
            </div>
        </Box>
    )
}
