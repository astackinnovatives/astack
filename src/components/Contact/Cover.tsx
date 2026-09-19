"use client"

import { Box, Image, Stack, Text, Title } from "@mantine/core"
import Reveal from "../Layout/Reveal"

export default function Cover() {
    return (
        <Reveal className="container">
            <Box pos="relative">
                <Image
                    src="/assets/images/contact-cover-1.jpg"
                    alt="contact us"
                    radius="xl"
                    mih="25rem"
                />
                <Stack
                    pos="absolute"
                    inset="0"
                    p="xl"
                    align="center"
                    gap={5}
                >
                    <Text
                        variant="gradient"
                        gradient={{ from: '#0E7FE1', to: '#FE035C', deg: 90 }}
                        fw={500}
                        fz="clamp(1.8rem, 7.5vw, 3rem)"
                        lh={1.1}
                    >
                        Where Vision Meets Innovation.
                    </Text>
                    <Text
                        variant="gradient"
                        gradient={{ from: '#595959', to: '#BFBFBF', deg: 90 }}
                        fz="lg"
                    >
                        Let's turn your ideas and challenges into something meaningful.
                    </Text>
                </Stack>
            </Box>
        </Reveal>
    )
}
