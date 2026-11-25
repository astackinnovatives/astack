"use client"
import { Anchor, AspectRatio, Badge, Card, Divider, Group, Image, Stack, Text, Title } from "@mantine/core"
import { IconArrowUpRight } from "@tabler/icons-react"
import { motion } from "motion/react"
import type { BrandProject } from "./projects"

type Props = {
    item: BrandProject
}

export default function BrandCard({ item }: Props) {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{ rest: { y: 0 }, hover: { y: -6 } }}
            transition={{ duration: .25 }}
        >
            <Anchor href={`/branding/${item.slug}/`} underline="never" c="inherit" aria-label={`${item.title} — ${item.kind}`}>
                <Stack>
                    <AspectRatio ratio={1.6} style={{ borderRadius: `var(--mantine-radius-md)`, overflow: `hidden` }}>
                        <motion.div
                            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                            transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
                        >
                            <Image
                                src={`/assets/images/branding/${item.image}`}
                                alt={`${item.title} ${item.kind.toLowerCase()} by Astack`}
                                loading="lazy"
                            />
                        </motion.div>
                    </AspectRatio>
                    <Card withBorder shadow="md">
                        <Group wrap="nowrap" align="end" justify="space-between" gap="md">
                            <Stack gap={6} flex={1} miw={0}>
                                <Divider label={<Text fz="sm">{item.cat}</Text>} labelPosition="left" />
                                <Title order={2} fz="lg">{item.title}</Title>
                                <Text fz="sm" c="color.8" lineClamp={2}>{item.text}</Text>
                            </Stack>
                            <Stack gap="xs" align="end">
                                <Badge variant="outline" color="color.8" radius="xl" tt="none" fw={400}>
                                    {item.kind}
                                </Badge>
                                <motion.span
                                    variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
                                    style={{ display: `grid`, placeItems: `center`, width: 36, height: 36, borderRadius: `50%`, background: `var(--mantine-color-color-4)`, color: `#fff` }}
                                    aria-hidden
                                >
                                    <IconArrowUpRight size={18} />
                                </motion.span>
                            </Stack>
                        </Group>
                    </Card>
                </Stack>
            </Anchor>
        </motion.div>
    )
}
