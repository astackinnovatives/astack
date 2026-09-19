"use client";

import { useState } from "react";
import Reveal from "../Layout/Reveal";
import { Button, Card, Group, Image, SimpleGrid } from "@mantine/core";

const items: string[] = [
    "icon-005.png",
    "icon-014.png",
    "icon-009.png",
    "icon-015.png",
    "icon-013.png",
    "icon-006.png",
    "icon-extra-013.png",
    "icon-extra-002.png",
    "icon-002.png",
    "icon-010.png",
    "icon-004.png",
    "icon-extra-008.png",

    "icon-007.png",
    "icon-008.png",
    "icon-011.png",
    "icon-012.png",
    "icon-extra-001.png",
    "icon-001.png",
    "icon-extra-003.png",
    "icon-extra-004.png",
    // "icon-extra-005.png",
    "icon-extra-006.png",
    "icon-extra-007.png",
    "icon-003.png",
    "icon-extra-009.png",
    "icon-extra-010.png",
    "icon-extra-011.png",
    "icon-extra-012.png",
    "icon-extra-014.png",
    // "icon-extra-015.png",
    "icon-extra-016.png",
    "icon-extra-017.png",
];

export default function OurClients() {
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? items : items.slice(0, 15);

    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-md-7">
                        <div className="title center">
                            <h2>Our Clients</h2>
                            <p>
                                Trusted by startups, growing businesses, and global brands
                                to create impactful digital experiences and lasting business value.
                            </p>
                        </div>
                    </Reveal>

                    <div className="col-12">
                        <SimpleGrid cols={{ base: 3, sm: 5 }} spacing={10}>
                            {visibleItems.map((item) => (
                                <Reveal key={item}>
                                    <Card bg="color.0" withBorder>
                                        <Image
                                            src={`/assets/images/clients/${item}`}
                                            alt="Our Clients"
                                            h="6rem"
                                            fit="contain"
                                        />
                                    </Card>
                                </Reveal>
                            ))}
                        </SimpleGrid>
                    </div>

                    {items.length > 15 && (
                        <Reveal className="col-12">
                            <Group justify="center">
                                <Button
                                    color="black"
                                    variant="outline"
                                    onClick={() => setShowAll((prev) => !prev)}
                                >
                                    {showAll ? "View Less Clients" : "View More Clients"}
                                </Button>
                            </Group>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    );
}