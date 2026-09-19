"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useMotionValue } from "motion/react"
import { Box, Stack, Text } from "@mantine/core"

type Item = {
    number: number
    text: string
}

const items: Item[] = [
    { number: 2500, text: "Projects Delivered" },
    { number: 50, text: "Creative Minds" },
    { number: 4, text: "Locations" },
    { number: 10, text: "Years of Expertise" },
]

function Counter({ number, text }: Item) {
    const ref = useRef<HTMLHeadingElement>(null)
    const value = useMotionValue(0)
    const isInView = useInView(ref, {
        once: false,
        amount: 0.8,
    })

    useEffect(() => {
        if (!ref.current) return

        if (isInView) {
            value.set(0)

            const controls = animate(value, number, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    ref.current!.textContent = `${Math.floor(latest)}+`
                },
            })

            return () => controls.stop()
        }

        value.set(0)
        ref.current.textContent = "0+"
    }, [isInView, number, value])

    return (
        <Stack align="center" gap={5}>
            <Text
                ref={ref}
                fz="xxl"
                variant="gradient"
                gradient={{ from: 'color.2', to: 'color.9', deg: 90 }}
            >
                0+
            </Text>
            <Text
                fz="lg"
                variant="gradient"
                gradient={{ from: 'color.2', to: 'color.9', deg: 90 }}
            >
                {text}
            </Text>
        </Stack>
    )
}

export default function TransformCount() {
    return (
        <Box w="100%">
            <div className="row g-3">
                {items.map((item) =>
                    <div key={item.text} className="col-6 col-md-3">
                        <Counter {...item} />
                    </div>
                )}
            </div>
        </Box>
    )
}