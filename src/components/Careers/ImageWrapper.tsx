"use client"

import { Image } from "@mantine/core"
import Reveal from "../Layout/Reveal"

export default function ImageWrapper() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3">
                    <Reveal className="col-12">
                        <Image
                            src="/assets/images/careers-image.png"
                            alt="career"
                            radius="xl"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
