"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Button, Group } from "@mantine/core"
import { IconArrowUpRight } from "@tabler/icons-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Reveal from "../Layout/Reveal"
import { brandProjects } from "../Branding/projects"
import css from "./BrandShowcase.module.css"

const AUTO_MS = 4500
const EASE = [0.22, 1, 0.36, 1] as const

export default function BrandShowcase() {
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const [cycle, setCycle] = useState(0) // restarts the progress bar
    const timer = useRef<ReturnType<typeof setTimeout>>(null)
    const p = brandProjects[active]

    const go = useCallback((i: number) => {
        setActive(i)
        setCycle((c) => c + 1)
    }, [])

    useEffect(() => {
        if (paused) return
        timer.current = setTimeout(() => go((active + 1) % brandProjects.length), AUTO_MS)
        return () => { if (timer.current) clearTimeout(timer.current) }
    }, [active, paused, cycle, go])

    return (
        <section
            className={css.sec}
            style={{ "--b1": p.palette[0], "--b2": p.palette[1], "--b3": p.palette[2] } as React.CSSProperties}
            aria-labelledby="brand-showcase-title"
        >
            <div className={css.glow} aria-hidden />
            <div className={css.grid} aria-hidden />

            <div className="container" style={{ position: `relative` }}>
                <div className="row g-3 g-md-4 justify-content-center">
                    <Reveal className="col-md-8">
                        <div className={`title center ${css.title}`}>
                            <span className={css.kicker}>Branding</span>
                            <h2 id="brand-showcase-title">Brands We&apos;ve Built</h2>
                            <p>
                                Identities with a story behind every stroke — from the idea and the logo to the colours, type and the last business card.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* desktop: list + live preview */}
                <div
                    className={css.stage}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <ol className={css.list} role="tablist" aria-label="Branding projects">
                        {brandProjects.map((item, i) => (
                            <li key={item.slug}>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={i === active}
                                    className={css.item}
                                    data-active={i === active || undefined}
                                    onClick={() => go(i)}
                                    onMouseEnter={() => go(i)}
                                    onFocus={() => go(i)}
                                >
                                    <span className={css.num}>{String(i + 1).padStart(2, `0`)}</span>
                                    <span className={css.itemBody}>
                                        <span className={css.name}>{item.title}</span>
                                        <span className={css.cat}>{item.cat}</span>
                                    </span>
                                    <span className={css.dots} aria-hidden>
                                        {item.palette.map((c) => <i key={c} style={{ background: c }} />)}
                                    </span>
                                    {i === active && !paused && (
                                        <motion.span
                                            key={cycle}
                                            className={css.progress}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: AUTO_MS / 1000, ease: `linear` }}
                                            aria-hidden
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ol>

                    <Link href={`/branding/${p.slug}/`} className={css.preview} aria-label={`View the ${p.title} brand identity`}>
                        <div className={css.frame}>
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.img
                                    key={p.slug}
                                    src={`/assets/images/branding/${p.image}`}
                                    alt={`${p.title} brand identity by Astack`}
                                    className={css.img}
                                    initial={{ opacity: 0, scale: 1.08, clipPath: `inset(0 0 0 100%)` }}
                                    animate={{ opacity: 1, scale: 1, clipPath: `inset(0 0 0 0%)` }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: .9, ease: EASE }}
                                />
                            </AnimatePresence>
                            <span className={css.badge}>{p.kind}</span>
                            <span className={css.cta}>
                                View case study <IconArrowUpRight size={18} />
                            </span>
                        </div>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={p.slug}
                                className={css.caption}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: .45, ease: EASE }}
                            >
                                <p>{p.text}</p>
                                <span className={css.swatches} aria-hidden>
                                    {p.palette.map((c, k) => (
                                        <motion.i
                                            key={c}
                                            style={{ background: c }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: .15 + k * .08, duration: .5, ease: EASE }}
                                        />
                                    ))}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </Link>
                </div>

                {/* mobile: swipeable cards */}
                <div className={css.mobile}>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.12}
                        spaceBetween={14}
                        autoplay={{ delay: AUTO_MS, disableOnInteraction: true }}
                        onSlideChange={(s) => setActive(s.realIndex)}
                    >
                        {brandProjects.map((item) => (
                            <SwiperSlide key={item.slug}>
                                <Link href={`/branding/${item.slug}/`} className={css.mCard}>
                                    <img src={`/assets/images/branding/${item.image}`} alt={`${item.title} brand identity by Astack`} loading="lazy" />
                                    <span className={css.mBody}>
                                        <span className={css.cat}>{item.cat}</span>
                                        <span className={css.name}>{item.title}</span>
                                        <span className={css.dots} aria-hidden>
                                            {item.palette.map((c) => <i key={c} style={{ background: c }} />)}
                                        </span>
                                    </span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Reveal>
                    <Group justify="center" gap="0.5rem" mt="xl">
                        <Button component={Link} href="/branding" color="color.4" rightSection={<IconArrowUpRight size={16} />}>
                            Explore Branding
                        </Button>
                        <Button component={Link} href="/contact" variant="outline" color="gray.0">
                            Start Your Brand
                        </Button>
                    </Group>
                </Reveal>
            </div>
        </section>
    )
}
