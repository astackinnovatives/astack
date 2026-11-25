import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import BrandingProjects from "@/components/Branding/BrandingProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Branding | Astack Innovatives PVT Ltd`,
    description: `Brand identities and landing pages crafted by Astack — Global Source, Athma, Binjoy and Foster Aviation.`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero
                image="/assets/images/branding/branding-cover.jpg"
                top="Brands Crafted"
                title="Identities That Endure."
                text="From the first idea to the last business card — logos, colour, type and digital experiences that give businesses a clear, confident voice."
            />
            <BrandingProjects />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}
