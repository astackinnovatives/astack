"use client"

import { Box, Button, Paper, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"
import Link from "next/link"

export default function Bottom() {
    return (
        <Paper
            bg="var(--gd-3)"
            py="xxl"
            radius="2rem 2rem 0 0"
        >
            <Stack mih="12.5rem" justify="end">
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-between">
                        <Reveal className="col-md-9">
                            <div className="title">
                                <Title order={2} mb={5} c="color.0">
                                    Let's Build Together
                                </Title>
                                <Text c="color.2">
                                    Whether you're building a new brand, launching a digital product, or transforming your business through technology, our team is ready to turn your vision into meaningful results. Let's create something exceptional together.
                                </Text>
                            </div>
                        </Reveal>
                        <Reveal className="col-md-auto">
                            <Button
                                variant="filled"
                                color="color.0"
                                c="color.3"
                                component={Link}
                                href="/"
                            >
                                Get Started
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </Stack>
        </Paper>
    )
}
