/* eslint-disable @typescript-eslint/no-explicit-any */
import { initBrandStudy } from "./brandStudy"

type Init = (root: HTMLElement, gsap: any, ScrollTrigger: any) => () => void

export const inits: Record<string, Init> = {
    "global-source": (root, gsap, ST) =>
        initBrandStudy(root, gsap, ST, {
            VB: { full: "-6 -6 652 163", word: "-6 -6 452 163" },
            COL: {
                c: ["#113855", "#E00F48", "#113855"],
                r: ["#ffffff", "#E00F48", "#ffffff"],
                w: ["#ffffff", "#ffffff", "#ffffff"],
                m: ["#303030", "#303030", "#303030"],
            },
            heroParts: { left: ".bin", up: ".joy, .ic", fade: ".tgl" },
        }),
    binjoy: (root, gsap, ST) =>
        initBrandStudy(root, gsap, ST, {
            VB: { full: "178 234 494 136", word: "178 234 494 98" },
            COL: {
                c: ["#284799", "#47AAE2", "#1D355A"],
                r: ["#ffffff", "#47AAE2", "#ffffff"],
                w: ["#ffffff", "#ffffff", "#ffffff"],
                m: ["#1D355A", "#1D355A", "#1D355A"],
            },
        }),
    athma: (root, gsap, ST) =>
        initBrandStudy(root, gsap, ST, {
            VB: { full: "-8 -8 916 259", word: "268 30 640 182" },
            COL: {
                c: ["#6D2877", "#55B130", "#5A5959"],
                r: ["#ffffff", "#55B130", "#ffffff"],
                w: ["#ffffff", "#ffffff", "#ffffff"],
                m: ["#29242B", "#29242B", "#29242B"],
            },
            GB: { c: "url(#ath-g-std)", r: "url(#ath-g-wg)", w: "#ffffff", m: "#29242B" },
            heroParts: { left: ".bin", up: ".joy, .ic", fade: ".tgl" },
        }),
    "foster-aviation": (root, gsap, ST) =>
        initBrandStudy(root, gsap, ST, {
            VB: { full: "-8 -8 560 168", word: "-8 -8 560 120" },
            COL: {
                c: ["#00311E", "#07BF9B", "#107A73"],
                r: ["#F8F8E8", "#07BF9B", "#F8F8E8"],
                w: ["#ffffff", "#ffffff", "#ffffff"],
                m: ["#0E1F1A", "#0E1F1A", "#0E1F1A"],
            },
        }),
}
