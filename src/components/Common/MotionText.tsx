"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { Transition, Variant } from "motion/react";

type Animation =
    | "slide-up"
    | "slide-left"
    | "slide-right"
    | "blur-rise"
    | "scale-pop"
    | "rotate-slide"
    | "wave"
    | "scatter"
    | "flip"
    | "typewriter"
    | "bounce";

type Props = {
    text?: string;
    animation?: Animation;
};

type AnimationConfig = {
    hidden: Variant;
    visible: Variant;
    transition: Transition;
    style?: CSSProperties;
};

const animations: Record<Animation, AnimationConfig> = {
    "slide-up": {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            duration: 0.1,
            ease: "easeOut",
        },
    },

    "slide-left": {
        hidden: {
            opacity: 0,
            x: 30,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },

    "slide-right": {
        hidden: {
            opacity: 0,
            x: -30,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },

    "blur-rise": {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
        },
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },

    "scale-pop": {
        hidden: {
            opacity: 0,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    "rotate-slide": {
        hidden: {
            opacity: 0,
            rotateX: -90,
            y: 15,
        },
        visible: {
            opacity: 1,
            rotateX: 0,
            y: 0,
        },
        transition: {
            duration: 0.4,
        },
        style: {
            transformOrigin: "bottom",
        },
    },

    wave: {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: [20, -10, 0],
        },
        transition: {
            duration: 0.5,
        },
    },

    scatter: {
        hidden: {
            opacity: 0,
            x: -40,
            y: 40,
            rotate: -90,
            scale: 0.3,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
        },
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },

    flip: {
        hidden: {
            opacity: 0,
            rotateY: 90,
        },
        visible: {
            opacity: 1,
            rotateY: 0,
        },
        transition: {
            duration: 0.4,
        },
        style: {
            transformStyle: "preserve-3d",
        },
    },

    typewriter: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
        transition: {
            duration: 0.01,
        },
    },

    bounce: {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 12,
        },
    },
};

export default function MotionText({
    text = "",
    animation = "slide-up",
}: Props) {
    const selected = animations[animation];

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: animation === "typewriter" ? 0.08 : 0.05,
                    },
                },
            }}
            style={{
                wordBreak: "keep-all",
                overflowWrap: "normal",
            }}
        >
            {text.split(" ").map((word, w) => (
                <span
                    key={w}
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                    }}
                >
                    {word.split("").map((char, c) => (
                        <motion.span
                            key={c}
                            variants={{
                                hidden: selected.hidden,
                                visible: selected.visible,
                            }}
                            transition={selected.transition}
                            style={{
                                display: "inline-block",
                                ...selected.style,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {w !== text.split(" ").length - 1 && "\u00A0"}
                </span>
            ))}
        </motion.span>
    );
}