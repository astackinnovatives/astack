"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import css from "./Cursor.module.css";

export default function Cursor() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const [ringX, setRingX] = useState(0);
    const [ringY, setRingY] = useState(0);

    const [isHovering, setIsHovering] = useState(false);

    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);

    useEffect(() => {
        let animationId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseXRef.current = e.clientX;
            mouseYRef.current = e.clientY;

            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        const animate = () => {
            setRingX((prev) => prev + (mouseXRef.current - prev) * 0.15);
            setRingY((prev) => prev + (mouseYRef.current - prev) * 0.15);

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", handleMouseMove);

        const elements = document.querySelectorAll("a, button");

        elements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });

            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div
                className={css.cursorDot}
                style={{
                    left: mouseX,
                    top: mouseY,
                }}
            />

            <div
                className={clsx(css.cursorRing, {
                    [css.active]: isHovering,
                })}
                style={{
                    left: ringX,
                    top: ringY,
                }}
            />
        </>
    );
}