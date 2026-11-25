export type BrandProject = {
    slug: string;
    title: string;
    /** short descriptor shown on the listing card */
    cat: string;
    /** one-line summary for cards and page metadata */
    text: string;
    /** card image in /public/assets/images/branding */
    image: string;
    /** what the inner page is: a brand identity case study or a website landing page */
    kind: "Brand identity" | "Landing page";
    /** brand palette (primary, accent, deep) used by the home showcase */
    palette: [string, string, string];
}

export const brandProjects: BrandProject[] = [
    {
        slug: `global-source`,
        title: `Global Source`,
        cat: `Construction Products · Saudi Arabia`,
        text: `A bilingual identity for a Saudi construction-products specialist: more than products, a partner you can trust.`,
        image: `global-source.jpg`,
        kind: `Brand identity`,
        palette: [`#113855`, `#E00F48`, `#0A2236`],
    },
    {
        slug: `athma`,
        title: `Athma`,
        cat: `Mental Health · Kerala`,
        text: `A calm, caring identity for a counselling practice where every mind deserves to be heard.`,
        image: `athma.jpg`,
        kind: `Brand identity`,
        palette: [`#6D2877`, `#55B130`, `#2A0F31`],
    },
    {
        slug: `binjoy`,
        title: `Binjoy`,
        cat: `Audit · Tax · Advisory · UAE`,
        text: `Clarity for your finances, confidence for your business: a brand for a UAE audit, tax and advisory practice.`,
        image: `binjoy.jpg`,
        kind: `Brand identity`,
        palette: [`#284799`, `#47AAE2`, `#0F1D45`],
    },
    {
        slug: `foster-aviation`,
        title: `Foster Aviation`,
        cat: `Aviation · Dubai`,
        text: `The sky, reimagined: an identity for an aviation company working from air charter to eVTOL and vertiports.`,
        image: `foster-aviation.jpg`,
        kind: `Brand identity`,
        palette: [`#107A73`, `#07BF9B`, `#03201B`],
    },
]
