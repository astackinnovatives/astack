import { Button, Divider, Paper, Stack, Text } from "@mantine/core";
import Reveal from "../Layout/Reveal";
import ScrollText from "../Common/ScrollText";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import TransformCount from "./TransformCount";

export default function Transform() {
    return (
        <Reveal className="container" animation="fade-left">
            <Paper
                p="xxl"
                bg="black"
                radius="xl"
            >
                <Stack ta="center" align="center">
                    <Text
                        variant="gradient"
                        gradient={{ from: 'color.8', to: 'color.9', deg: 90 }}
                        fz="xxl"
                        fw={200}
                    >
                        Transform. Innovate. Scale.
                    </Text>
                    <Text fz="xl" fw={200}>
                        <ScrollText
                            text="At Astack, we believe every great business begins with a bold vision.
                            Through strategic branding, intelligent technology, and meaningful
                            digital experiences, we help ambitious companies build stronger brands,
                            create lasting customer connections, and grow with confidence."
                        />
                    </Text>
                    <Button
                        variant="transparent"
                        rightSection={<IconArrowNarrowRight stroke={1} />}
                    >
                        know more
                    </Button>
                    <Divider w="100%" color="color.9" />
                    <TransformCount />
                </Stack>
            </Paper>
        </Reveal>
    )
}
