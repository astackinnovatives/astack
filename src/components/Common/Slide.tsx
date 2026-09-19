"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css/bundle';
import SwiperNavigation from "./SwiperNavigation";

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
            slidesPerView: 2,
        },
    },
};


export default function Slide() {
    type Item = {
        text: string
    }

    const items: Item[] = [
        {
            text: ``
        },
    ]

    return (
        <>
            <Swiper {...config}>
                {items.map((item, i) =>
                    <SwiperSlide key={i}>
                        <div className="card">
                            <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                )}
                <SwiperNavigation />
            </Swiper>
        </>
    )
}