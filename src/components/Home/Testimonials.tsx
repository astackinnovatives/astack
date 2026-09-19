"use client"

import Reveal from '../Layout/Reveal'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css/bundle';
import { Avatar, Box, Card, Group, Stack, Text } from '@mantine/core';

const config: SwiperOptions = {
    modules: [Autoplay, Navigation],
    loop: true,
    spaceBetween: 15,
    speed: 1000,
    autoplay: {
        delay: 2500,
    },
    // navigation: {
    //     nextEl: '.next',
    //     prevEl: '.prev',
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    },
};

type Item = {
    text: string
    name: string
    position: string
    image: string
}

const items: Item[] = [
    {
        text: `"Such an amazing team to work with. Thank you Astack team for delivering a high quality website, SEO services and customised app for my firm in Dubai."`,
        name: `Jaison Mandapathil`,
        position: `HALSCA`,
        image: `jaison.png`,
    },
    {
        text: `"Outstanding service and professionalism. The team is knowledgeable, patient, responsive, and genuinely committed to delivering the best solutions for their clients. From the initial consultation to the final outcome, everything was handled with great attention to detail. Their expertise, transparency, and customer-focused approach make them a trusted partner. Highly recommended for anyone looking for reliable and high-quality branding and webpage."`,
        name: `Hamdan Ali Parayil`,
        position: `Foster Aviation`,
        image: `hamdan.png`,
    },
    {
        text: `"We had a great experience working with Astack Innovatives on our website design and development, content writing, and overall digital transformation. Their team understood our business requirements very well and translated them into a professional, modern, and user-friendly digital presence."`,
        name: `Benny Mathew`,
        position: `Benair`,
        image: `benny.png`,
    },
]

export default function Testimonials() {
    return (
        <Box py="xxl" bg="color.0">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-md-8">
                        <div className="title center">
                            <h2>Testimonials</h2>
                            <p>
                                Every successful project begins with trust. Here's what our clients have to say about partnering with Astack to transform their brands, digital experiences, and business growth.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal className="col-12">
                        <Swiper {...config} className='py-2'>
                            {items.map((item, i) =>
                                <SwiperSlide key={i}>
                                    <Card
                                        p="lg"
                                        withBorder
                                        shadow='sm'
                                    >
                                        <Stack h="100%">
                                            <Text
                                                fz="sm"
                                                fs="italic"
                                                flex={1}
                                                c="color.8"
                                            >
                                                {item.text}
                                            </Text>
                                            <Group wrap='nowrap'>
                                                <Avatar
                                                    src={`/assets/images/testimonials/${item.image}`}
                                                    size="lg"
                                                />
                                                <Stack gap={0}>
                                                    <Text fw={500} c="color">{item.name}</Text>
                                                    <Text fs="italic" fz="xs">{item.position}</Text>
                                                </Stack>
                                            </Group>
                                        </Stack>
                                    </Card>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </Reveal>
                </div>
            </div>
        </Box>
    )
}
