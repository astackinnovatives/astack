"use client"

import { useMemo, useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"

type ScrollTextProps = {
    text?: string
    from?: string
    to?: string
    wordSpan?: number
    className?: string
}

type WordProps = {
    word: string
    isLast: boolean
    scrollYProgress: MotionValue<number>
    start: number
    end: number
    from: string
    to: string
}

function Word({ word, isLast, scrollYProgress, start, end, from, to }: WordProps) {
    const color = useTransform(scrollYProgress, [start, end], [from, to], {
        clamp: true,
    })

    return (
        <motion.span
            style={{
                color,
                display: "inline-block",
                whiteSpace: "nowrap",
            }}
        >
            {word}
            {!isLast && "\u00A0"}
        </motion.span>
    )
}

export default function ScrollText({
    text = "",
    from = "#5A6A75",
    to = "#ffffff",
    wordSpan = 0.15,
    className,
}: ScrollTextProps) {
    const ref = useRef<HTMLSpanElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 50%"],
    })

    const words = useMemo(() => text.split(" ").filter(Boolean), [text])

    return (
        <span ref={ref} className={className}>
            {words.map((word, index) => {
                const start = index / words.length
                const end = Math.min(start + wordSpan, 1)

                return (
                    <Word
                        key={`${word}-${index}`}
                        word={word}
                        isLast={index === words.length - 1}
                        scrollYProgress={scrollYProgress}
                        start={start}
                        end={end}
                        from={from}
                        to={to}
                    />
                )
            })}
        </span>
    )
}