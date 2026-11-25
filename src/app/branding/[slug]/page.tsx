import CaseStudy from "@/components/Branding/CaseStudy"
import { brandProjects, studies } from "@/components/Branding/Data"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return brandProjects.filter((p) => studies[p.slug]).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/branding/[slug]">): Promise<Metadata> {
    const { slug } = await params
    const p = brandProjects.find((x) => x.slug === slug)
    return {
        title: p ? `${p.title} — ${p.kind} | Astack Innovatives PVT Ltd` : `Branding | Astack Innovatives PVT Ltd`,
        description: p?.text,
    }
}

export default async function Page({ params }: PageProps<"/branding/[slug]">) {
    const { slug } = await params
    const study = studies[slug]
    if (!study) notFound()
    return <CaseStudy slug={slug} html={study.html} css={study.css} />
}
