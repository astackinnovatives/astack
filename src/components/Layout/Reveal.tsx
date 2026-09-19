"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Animation =
    | "fade-up"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out"
    | "fade-in";

interface RevealProps extends HTMLMotionProps<"div"> {
    animation?: Animation;
    delay?: number;
    duration?: number;
    once?: boolean;
}

const variants = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    "zoom-out": {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export default function Reveal({
    animation = "fade-up",
    delay = 0,
    duration = 0.5,
    once = false,
    children,
    ...props
}: RevealProps) {
    return (
        <motion.div
            {...props}
            variants={variants[animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}