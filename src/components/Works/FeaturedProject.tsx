"use client"

import { Box, Button, Group, Text } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import { works } from "./Data"
import ProjectCard from "./ProjectCard"

const items: string[] = [
    `All`,
    `Branding`,
    `UI/UX Design & Development`,
    `Technology`,
    `Digital Marketing`,
]

export default function FeaturedProject() {
    return (
        <Box py="xxl" bg="color.0">
            <div className="container">
                <div className="row g-3 g-md-4 justify-content-center">
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>Featured Project</h2>
                        </div>
                    </Reveal>
                    <Reveal className="col-md-10">
                        <Group>
                            {items.map((item) =>
                                <Button
                                    key={item}
                                    variant="outline"
                                    color="color.8"
                                    radius="xl"
                                >
                                    <Text
                                        fw={500}
                                        fz="xs"
                                    >
                                        {item}
                                    </Text>
                                </Button>
                            )}
                        </Group>
                    </Reveal>
                    {works.map((item, i) =>
                        <Reveal className="col-md-5" key={i}>
                            <ProjectCard item={item} />
                        </Reveal>
                    )}
                </div>
            </div>
        </Box>
    )
}
