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
    kind: "Brand identity" | "Rebranding";
    /** brand palette (primary, accent, deep) used by the home showcase */
    palette: [string, string, string];
}

export const brandProjects: BrandProject[] = [
    {
        slug: `global-source`,
        title: `Global Source`,
        cat: `Construction Products · Saudi Arabia`,
        text: `People first, trust always: a bilingual Arabic–English identity for a Saudi construction-products specialist.`,
        image: `global-source.jpg`,
        kind: `Brand identity`,
        palette: [`#123B55`, `#E01747`, `#0A2236`],
    },
    {
        slug: `athma`,
        title: `Athma`,
        cat: `Mental Health Care · Kerala`,
        text: `My mind. My care. A rebrand for mental health care that feels less intimidating, more accessible and deeply human.`,
        image: `athma.jpg`,
        kind: `Rebranding`,
        palette: [`#6C2877`, `#58B031`, `#2A0F31`],
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
        cat: `Aviation · Dubai South`,
        text: `The Sky, Reimagined: an identity and guidelines for a Dubai South aviation company, from air charter to eVTOL.`,
        image: `foster-aviation.jpg`,
        kind: `Brand identity`,
        palette: [`#0B1A2C`, `#C9A66B`, `#1C1C1C`],
    },
]
