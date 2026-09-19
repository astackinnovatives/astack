"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import css from "./ScrollTop.module.css";
import { IconChevronsUp } from "@tabler/icons-react";

export default function ScrollTop() {
    const [isActive, setIsActive] = useState(false);
    const [progressHeight, setProgressHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            setIsActive(scrollTop > 1);

            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight > 0) {
                setProgressHeight((scrollTop / docHeight) * 100);
            } else {
                setProgressHeight(0);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={clsx(css.top, {
                [css.active]: isActive,
            })}
            onClick={scrollToTop}
        >
            <IconChevronsUp stroke={1.5} />
            <span
                style={{
                    height: `${progressHeight}%`,
                }}
            />
        </div>
    );
}