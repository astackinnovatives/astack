"use client"

import { Box, Image } from "@mantine/core"
import { Work } from "./Data"
import Reveal from "../Layout/Reveal"

type Props = {
    item: Work
}

export default function SecTwo({ item }: Props) {
    return (
        <Box bg="color.0" py="xxl">
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-12" animation="zoom-in">
                        <Image
                            src={`/assets/images/works/${item.secTwo.image}`}
                            alt={item.secTwo.title}
                            radius="xl"
                        />
                    </Reveal>
                    <Reveal className="col-12">
                        <div className="title center">
                            <h2>{item.secTwo.title}</h2>
                        </div>
                    </Reveal>
                    <Reveal className="col-md-10 text-center">
                        {item.secTwo.text.map((text) =>
                            <p key={text}>{text}</p>
                        )}
                    </Reveal>
                </div>
            </div>
        </Box>
    )
}
