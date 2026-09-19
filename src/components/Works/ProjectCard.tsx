"use client"
import { Anchor, AspectRatio, Button, Card, Divider, Group, Image, Stack, Text, Title } from "@mantine/core"
import { motion } from "motion/react"
import type { Work } from "./Data"

type Props = {
    item: Work
}

export default function ProjectCard({ item }: Props) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: .25 }}
        >
            <Anchor href={`/works/${item.id}`}>
                <Stack>
                    <AspectRatio ratio={1.5}>
                        <Image
                            src={`/assets/images/works/${item.hero.image}`}
                            alt={item.hero.title}
                            radius="md"
                        />
                    </AspectRatio>
                    <Card
                        withBorder
                        shadow="md"
                    >
                        <Group
                            wrap="nowrap"
                            align="end"
                            justify="space-between"
                        >
                            <Stack gap={5} flex={1}>
                                <Divider
                                    label={
                                        <Text>{item.hero.cat}</Text>
                                    }
                                    labelPosition="left"
                                />
                                <Title order={2} textWrap="nowrap" fz="lg">
                                    {item.hero.title}
                                </Title>
                            </Stack>
                            <Group justify="end" gap={10}>
                                {item.category.map((chip) =>
                                    <Button
                                        key={chip}
                                        size="xs"
                                        variant="outline"
                                        color="color.8"
                                        radius="xl"
                                    >
                                        {chip}
                                    </Button>
                                )}
                            </Group>
                        </Group>
                    </Card>
                </Stack>
            </Anchor>
        </motion.div>
    )
}
