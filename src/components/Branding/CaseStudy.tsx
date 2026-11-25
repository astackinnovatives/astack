"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { inits } from "./inits"

// Neutralise site-wide element rules (globals.css) inside case studies; study CSS comes after and wins.
const RESET = `.cs-root h1,.cs-root h2,.cs-root h3,.cs-root h4,.cs-root h5,.cs-root h6{color:inherit}.cs-root b,.cs-root strong{font-weight:700}.cs-root ul{padding-left:40px;margin-block:1em}.cs-root img{max-height:none}.cs-root p{margin:0}.cs-root .lk svg[data-ver="word"] .tgl,.cs-root .lk svg[data-ver="word"] .ic{display:none}`

type Props = {
    slug: string;
    html: string;
    css: string;
}

/**
 * Renders a self-contained case study (markup + scoped CSS from the original design files)
 * and boots its interactions on the client. Everything is torn down on navigation.
 */
export default function CaseStudy({ slug, html, css }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const root = ref.current
        const init = inits[slug]
        if (!root || !init) return
        gsap.registerPlugin(ScrollTrigger)
        const cleanup = init(root, gsap, ScrollTrigger)
        return () => {
            cleanup()
            ScrollTrigger.refresh()
        }
    }, [slug])

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: RESET + css }} />
            <div
                ref={ref}
                className={`cs-root cs-${slug}`}
                dangerouslySetInnerHTML={{ __html: html }}
                suppressHydrationWarning
            />
        </>
    )
}
