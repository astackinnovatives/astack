/* eslint-disable @typescript-eslint/no-explicit-any */
import athma from "./scripts/athma"
import binjoy from "./scripts/binjoy"
import fosterAviation from "./scripts/foster-aviation"
import globalSource from "./scripts/global-source"

type Init = (root: HTMLElement, gsap: any, ScrollTrigger: any) => () => void

export const inits: Record<string, Init> = {
    // original page scripts from the case-study exports
    athma: (_root, gsap, ST) => athma(gsap, ST),
    binjoy: (_root, gsap, ST) => binjoy(gsap, ST),
    "foster-aviation": (_root, gsap, ST) => fosterAviation(gsap, ST),
    "global-source": (_root, gsap, ST) => globalSource(gsap, ST),
}
