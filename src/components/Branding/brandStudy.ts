/* eslint-disable @typescript-eslint/no-explicit-any */
// Interactions for the brand-identity case studies (BINJOY, Athma, Foster Aviation).
// Ported from the original standalone page script; scoped to the page root and fully cleaned up on unmount.

export type BrandStudyConfig = {
    /** viewBox per logo version for the lab ("full" lockup and "word" wordmark only) */
    VB: Record<"full" | "word", string>;
    /** colour sets per background mode: [c1, c2, c3] */
    COL: Record<"c" | "r" | "w" | "m", [string, string, string]>;
    /** optional per-mode value for the --gb custom property (Athma's gradient figure) */
    GB?: Record<"c" | "r" | "w" | "m", string>;
    /** hero entrance: selectors (inside #heroLogo) animated from the left / from below / faded in */
    heroParts?: { left: string; up: string; fade: string };
};

export function initBrandStudy(root: HTMLElement, gsap: any, ScrollTrigger: any, cfg: BrandStudyConfig): () => void {
    const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = root) => c.querySelector(s) as T;
    const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = root) => Array.from(c.querySelectorAll(s)) as T[];
    const offs: (() => void)[] = [];
    const on = (el: EventTarget | null, ev: string, fn: any, opt?: any) => {
        if (!el) return;
        el.addEventListener(ev, fn, opt);
        offs.push(() => el.removeEventListener(ev, fn, opt));
    };
    let alive = true;

    // toast + copy colour
    const toast = $("#toast");
    let tt: any;
    const say = (t: string) => {
        if (!toast) return;
        toast.textContent = t;
        toast.classList.add("show");
        clearTimeout(tt);
        tt = setTimeout(() => toast.classList.remove("show"), 1800);
    };
    $$<HTMLElement>("[data-hex]").forEach((b) =>
        on(b, "click", async () => {
            const h = b.dataset.hex || "";
            try { await navigator.clipboard.writeText(h); say("Copied " + h); } catch { say(h); }
        })
    );

    // stationery frames scale to their width (designed at 1123px)
    const fit = (f: HTMLElement) => f.style.setProperty("--s", String(f.clientWidth / 1123));
    const ro = new ResizeObserver((es) => es.forEach((e) => fit(e.target as HTMLElement)));
    $$<HTMLElement>(".frame").forEach((f) => ro.observe(f));
    const lb = $<HTMLDialogElement>("#lb"), lbc = $("#lbc");
    if (lb && lbc) {
        $$<HTMLElement>(".slide .frame").forEach((f) =>
            on(f, "click", () => {
                lbc.innerHTML = "";
                const c = f.cloneNode(true) as HTMLElement;
                c.removeAttribute("aria-label");
                lbc.appendChild(c);
                lb.showModal();
                requestAnimationFrame(() => fit(c));
                ro.observe(c);
            })
        );
        on($(".x", lb), "click", () => lb.close());
        on(lb, "click", (e: MouseEvent) => { if (e.target === lb) lb.close(); });
    }

    // idea board: scattered chips -> sorted grid
    const board = $("#board"), chips = board ? $$<HTMLElement>(".ch", board) : [];
    const start: any[] = [], end: any[] = [];
    let LP = 0;
    function layout() {
        if (!board) return;
        const BW = board.clientWidth, BH = board.clientHeight;
        const cols = BW < 500 ? 2 : 3, rows = Math.ceil(chips.length / cols), cw = BW / cols, rh = Math.max(22, Math.min(32, (BH - 40) / rows)); // keep labels legible on small boards; extra chips fade out
        const vis = Math.floor((BH - 40) / rh);
        chips.forEach((c, i) => {
            const r = (Math.sin(i * 12.9898) * 43758.5453) % 1, q = (Math.sin(i * 78.233) * 12345.678) % 1;
            start[i] = { x: Math.abs(r) * (BW - 110), y: Math.abs(q) * (BH - 30), rot: (r - 0.5) * 70, o: 0.25 + Math.abs(q) * 0.6, b: Math.abs(r) * 3 };
            const col = i % cols, row = Math.floor(i / cols);
            end[i] = { x: col * cw + cw - c.offsetWidth - 18, y: 20 + row * rh, rot: 0, o: row < vis ? 1 : 0, b: 0 };
            c.classList.toggle("hl", row === vis - 1);
        });
    }
    function setL(p: number) {
        const e = p * p * (3 - 2 * p);
        chips.forEach((c, i) => {
            const a = start[i], b = end[i];
            if (!a || !b) return;
            const x = a.x + (b.x - a.x) * e, y = a.y + (b.y - a.y) * e, r = a.rot * (1 - e), o = a.o + (b.o - a.o) * e, bl = a.b * (1 - e);
            c.style.transform = `translate(${x}px,${y}px) rotate(${r}deg)`;
            c.style.opacity = String(o);
            c.style.filter = bl > 0.1 ? `blur(${bl}px)` : "none";
        });
        const s = p < 0.34 ? 0 : p < 0.8 ? 1 : 2;
        $$<HTMLElement>("#state span").forEach((el, k) => (el.style.opacity = k === s ? "1" : "0"));
    }
    layout();
    setL(0);
    on(window, "resize", () => { layout(); setL(LP); });

    // logo anatomy
    const anat = $("#anat"), ovs = anat ? $$(".ov", anat) : [], steps = anat ? $$<HTMLElement>(".step", anat) : [];
    function act(i: number) {
        ovs.forEach((o, k) => o.classList.toggle("on", k == i));
        steps.forEach((o, k) => o.classList.toggle("on", k == i));
        anat?.classList.toggle("dim", i >= 0);
    }
    const io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) act(+(e.target as HTMLElement).dataset.i!); }),
        { rootMargin: "-45% 0px -45% 0px" }
    );
    steps.forEach((s) => { io.observe(s); on(s, "mouseenter", () => act(+s.dataset.i!)); });

    // logo lab
    const stage = $("#stage"), lk = $("#lk");
    const monoTpl = $<HTMLTemplateElement>("#cs-mono");
    const mono = monoTpl ? monoTpl.innerHTML : "";
    let mode: keyof BrandStudyConfig["COL"] = "c", ver: "full" | "word" | "mono" = "full";
    const saved = lk ? lk.innerHTML : "";
    function draw() {
        if (!lk) return;
        const c = cfg.COL[mode];
        if (ver === "mono") {
            lk.classList.add("mono");
            lk.innerHTML = mono + '<div class="zone"></div>';
            const s = $<SVGElement>("svg", lk);
            s.style.setProperty("--c1", c[0]);
            s.style.setProperty("--c2", mode === "c" ? c[1] : c[0]);
            s.style.setProperty("--c3", mode === "c" ? c[2] : c[0]);
            if (cfg.GB) s.style.setProperty("--gb", cfg.GB[mode]);
        } else {
            lk.classList.remove("mono");
            lk.innerHTML = saved;
            const s = $<SVGElement>("svg", lk);
            s.setAttribute("viewBox", cfg.VB[ver]);
            s.setAttribute("data-ver", ver);
            s.style.setProperty("--c1", c[0]);
            s.style.setProperty("--c2", c[1]);
            s.style.setProperty("--c3", c[2]);
            if (cfg.GB) s.style.setProperty("--gb", cfg.GB[mode]);
        }
    }
    $$<HTMLElement>(".bgb").forEach((b) =>
        on(b, "click", () => {
            $$(".bgb").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
            if (stage) stage.style.background = b.dataset.bg || "";
            mode = (b.dataset.v as any) || "c";
            draw();
        })
    );
    ([["vF", "full"], ["vW", "word"], ["vM", "mono"]] as const).forEach(([id, v]) =>
        on($("#" + id), "click", () => {
            ver = v;
            ["vF", "vW", "vM"].forEach((k) => $("#" + k)?.setAttribute("aria-pressed", String(k === id)));
            draw();
        })
    );
    on($("#vZ"), "click", () => {
        if (!stage) return;
        const o = stage.classList.toggle("zoneon");
        $("#vZ")?.setAttribute("aria-pressed", String(o));
    });
    $$<HTMLElement>(".ai").forEach((a) => {
        on(a, "pointermove", (e: PointerEvent) => {
            const r = a.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
            a.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 24}deg)`;
        });
        on(a, "pointerleave", () => (a.style.transform = ""));
    });

    // type weights
    $$<HTMLElement>(".wts button").forEach((b) =>
        on(b, "click", () => {
            $$(".wts button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
            $("#tester")?.style.setProperty("--w", b.dataset.w || "700");
        })
    );

    // scroll choreography
    gsap.registerPlugin(ScrollTrigger);
    const hp = cfg.heroParts || { left: ".bin", up: ".joy", fade: ".tgl" };
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add({ motion: "(prefers-reduced-motion: no-preference)", wide: "(min-width: 861px)" }, (c: any) => {
            const { motion, wide } = c.conditions;
            if (!motion) { setL(1); return; }
            const H = $("#heroLogo");
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            if (H) {
                tl.from(H.querySelectorAll(hp.left), { x: -60, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.1)
                    .from(H.querySelectorAll(hp.up), { y: 60, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=.7")
                    .from(H.querySelectorAll(hp.fade), { opacity: 0, y: 10, duration: 0.5, stagger: 0.04 }, "-=.4");
            }
            tl.from(".hero h1", { opacity: 0, y: 30, duration: 0.9 }, "-=.5").from(".meta>div", { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, "-=.5");
            gsap.to(".hero .wrap", { yPercent: -14, opacity: 0.25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
            const o = { p: 0 };
            if (board) gsap.to(o, { p: 1, ease: "none", onUpdate: () => { LP = o.p; setL(o.p); }, scrollTrigger: { trigger: "#ledger", start: "top top", end: "+=150%", scrub: 1, pin: true } });
            $$<SVGGeometryElement>(".cons .gl").forEach((l) => {
                const L = l.getTotalLength ? l.getTotalLength() : 800;
                gsap.fromTo(l, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".cons", start: "top 80%", end: "center 50%", scrub: true } });
            });
            gsap.from(".ai-w", { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.6)", scrollTrigger: { trigger: "#icons", start: "top 88%" } });
            gsap.from(".ratio i", { scaleX: 0, transformOrigin: "left", stagger: 0.1, duration: 0.9, scrollTrigger: { trigger: ".ratio", start: "top 92%" } });
            gsap.from(".speclist li:not(.hd)", { opacity: 0, x: -30, stagger: 0.05, duration: 0.6, scrollTrigger: { trigger: ".speclist", start: "top 80%" } });
            if (wide) {
                const rail = $("#rail");
                const max = () => rail.scrollWidth - innerWidth;
                gsap.to(rail, {
                    x: () => -max(), ease: "none",
                    scrollTrigger: { trigger: ".rail-pin", start: "center center", end: () => "+=" + max(), scrub: 1, pin: true, invalidateOnRefresh: true, onUpdate: (s: any) => gsap.set("#prog", { scaleX: s.progress }) },
                });
            }
            $$<HTMLElement>("[data-count]").forEach((b) => {
                const v = +b.dataset.count!, q = { n: 0 };
                gsap.to(q, { n: v, duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: b, start: "top 90%" }, onUpdate: () => (b.textContent = String(Math.round(q.n))) });
            });
            if (document.fonts) document.fonts.ready.then(() => { if (!alive) return; layout(); setL(LP); ScrollTrigger.refresh(); });
        });
    }, root);
    // images/fonts settle after hydration
    const refreshT = setTimeout(() => alive && ScrollTrigger.refresh(), 600);

    return () => {
        alive = false;
        clearTimeout(tt);
        clearTimeout(refreshT);
        ctx.revert();
        io.disconnect();
        ro.disconnect();
        offs.forEach((f) => f());
        if (lb && lb.open) lb.close();
    };
}
