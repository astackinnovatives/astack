"use client";

import { motion } from "motion/react";

type Props = {
    text?: string;
};

export default function MotionLink({ text }: Props) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            style={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            <motion.div
                variants={{
                    rest: { y: "0%" },
                    hover: { y: "-100%" },
                }}
                transition={{
                    duration: .3,
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                {text}
            </motion.div>

            <motion.div
                variants={{
                    rest: { y: "100%" },
                    hover: { y: "0%" },
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                    position: `absolute`,
                    inset: `0`,
                }}
            >
                {text}
            </motion.div>
        </motion.div>
    );
}