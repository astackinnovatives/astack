"use client"

import { useRef } from "react"
import { Marquee, Stack, Title } from "@mantine/core"
import { useMotionValueEvent, useScroll, useSpring, useVelocity } from "motion/react"

const BASE_DURATION = 9000

export default function Branding(): React.JSX.Element {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    })

    useMotionValueEvent(smoothVelocity, "change", (latest) => {
        const section = sectionRef.current
        if (!section) return

        const speedMultiplier = 1 + Math.abs(latest) / 1000
        const currentDuration = BASE_DURATION / speedMultiplier

        section.style.setProperty("--dynamic-duration", `${currentDuration}ms`)
    })

    return (
        <section ref={sectionRef} className="sec-block">
            <div className="container">
                <Title
                    tt="uppercase"
                    fz="clamp(2.25rem, 10vw, 3.5rem)"
                    ff="var(--font-2)"
                >
                    <Stack>
                        <Marquee
                            className="marqueeOverride"
                            style={{ "--marquee-duration": "var(--dynamic-duration, 9000ms)" } as React.CSSProperties}
                        >
                            Innovation &#9900; Branding &#9900; Strategy &#9900; Technology &#9900; AI Solutions  &#9900;
                        </Marquee>
                        <Marquee
                            className="marqueeOverride"
                            reverse
                            style={{ "--marquee-duration": "var(--dynamic-duration, 9000ms)" } as React.CSSProperties}
                        >
                            Digital Products &#9900; Business Growth &#9900; Creative Thinking  &#9900;
                        </Marquee>
                    </Stack>
                </Title>
            </div>
        </section>
    )
}