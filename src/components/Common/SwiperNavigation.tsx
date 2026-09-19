"use client";

import { useSwiper } from "swiper/react";
import { IconArrowBigLeftLines, IconArrowBigRightLines } from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";

export default function SwiperNavigation() {
    const swiper = useSwiper();

    return (
        <Group mt="md" gap={5} justify="center">
            <ActionIcon
                variant="filled"
                color="color"
                h="2.5rem"
                w="2.5rem"
                radius="xl"
                onClick={() => swiper.slidePrev()}
            >
                <IconArrowBigLeftLines stroke={1.25} />
            </ActionIcon>
            <ActionIcon
                variant="filled"
                color="color"
                h="2.5rem"
                w="2.5rem"
                radius="xl"
                onClick={() => swiper.slideNext()}
            >
                <IconArrowBigRightLines stroke={1.25} />
            </ActionIcon>
        </Group>
    )
}